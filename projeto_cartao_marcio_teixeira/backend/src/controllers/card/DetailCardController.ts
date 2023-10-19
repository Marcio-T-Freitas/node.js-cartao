import {Request,Response} from 'express'
import {DetailCardService} from "../../services/card/DetailCardService"

class DetailCardController {
  async handle(req: Request,res:Response){

    const card_id = req.card_id;

    console.log("token",card_id);
 
     const detailCardService = new DetailCardService();
     const card = await detailCardService.execute(card_id);

     return res.json(card)

}

}

export {DetailCardController}