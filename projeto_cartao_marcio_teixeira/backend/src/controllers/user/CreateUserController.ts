import {Request,Response,response} from 'express'

import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {

    async handle(req: Request,res: Response) {
        const {cpf,nome} = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({cpf,nome});

        return res.json(user)
    }
}

export{CreateUserController}   