import {Router} from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

import { CreateCardController } from "./controllers/card/CreateCardController";

import { AuthCardController } from "./controllers/card/AuthCardController";

import { DetailCardController } from "./controllers/card/DetailCardController";
import { isAuthenticated } from "./middleware/isAuthenticated";

const router = Router();

router.post('/users',new CreateUserController().handle)

router.post('/card',new CreateCardController().handle)

router.post('/validacao',new AuthCardController().handle)

router.get('/cardinfo', isAuthenticated, new DetailCardController().handle)


export {router};