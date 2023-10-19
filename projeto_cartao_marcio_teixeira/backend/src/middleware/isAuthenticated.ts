import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

interface Payload{
  sub:string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const authtoken = req.headers.authorization;

    if (!authtoken) {
   
        return res.status(401).end();

    }
    console.log(authtoken)

    const [, token] = authtoken.split(" ")

 try {
    const { sub } = verify(
        token,
        process.env.JWT_SECRET 
        )as Payload

        req.card_id =sub;

        console.log(sub)

        return next();
    }
    catch(err){
      return res.status(401).end();
    }
}

