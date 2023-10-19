import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface UserRequest {
  numero: string,
  codigo: string,
  senha: string,
  id_usuario: string
}

class CreateCardService {
  async execute({ numero, codigo, senha, id_usuario }: UserRequest) {

    if (!numero) {
      throw new Error('Número não enviado!');
    }

    const senhaHash = await hash(senha, 6)
    const CardAlreadyExists = await prismaClient.cartao.findFirst({
      where: {
        numero: numero
      }
    })

    if (CardAlreadyExists) {
      throw new Error('Cartão já existe!!')
    }

    const id = await prismaClient.usuario.findFirst({
      where:{
      id:id_usuario
      }
    })

    if (!id)
    {
      throw new Error('Usuario não existe')
    }

    if (codigo.length ==3){
    
    const card = await prismaClient.cartao.create({
      data: {
        numero: numero,
        codigo: codigo,
        senha: senhaHash,
        id_usuario: id_usuario
      },
      select: {
        numero: true,
        codigo:true,
        senha:true

      }
      
    })
    console.log('cartao cadastrado')
    return card
  }
  else
  {
    throw new Error('Codigo incorreto')
  }

  }

}

export { CreateCardService }