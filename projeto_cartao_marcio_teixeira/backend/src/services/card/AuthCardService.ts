import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

interface AuthRequest{
   codigo:string;
}

class AuthCardService{
 async execute({codigo}:AuthRequest){
   
    const card = await prismaClient.cartao.findFirst({
    where:{
       codigo:codigo
    }
    })

    if(!card)
    {
    throw new Error('Codigo incorreto!');
    }
    
    const token = sign(
    {
        codigo: card.codigo
    },
    process.env.JWT_SECRET,
    {
      subject:card.id_usuario,
      expiresIn:'10min'
    }
    )
      return {
      numero:card.numero,
      codigo:card.codigo,
      senha:card.senha,
      token:token
    }
}

}

export{AuthCardService};