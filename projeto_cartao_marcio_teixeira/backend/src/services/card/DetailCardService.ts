import prismaClient from "../../prisma";

class DetailCardService {
 
    async execute(card_id:string){
      
        const card = await prismaClient.cartao.findFirst({
         where:{
           id_usuario:card_id
        },
        select:{
          numero:true,
          codigo:true,
          senha:true,
          id_usuario:true,
        }
    })
     return card;
}
}

export {DetailCardService}