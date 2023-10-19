import {Request,Response} from 'express'
import { AuthCardService } from '../../services/card/AuthCardService';

class AuthCardController {
 
    async handle(req:Request, res:Response){
     const {codigo} = req.body;

     const authCardService = new AuthCardService();

     const auth = await authCardService.execute({
       codigo
    })
    return res.json(auth)
    }
}

export{AuthCardController}