import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated (
    req: Request, 
    res: Response,
    next: NextFunction
    ) {
        //Receber o token
        const authToken = req.headers.authorization;

        //Validar se token está preenchido
        if(!authToken){
            return res.status(401).end();
        }

        const [,token] = authToken.split(" ")
        try {
            //Validar se token é valido
            const { sub } = verify(token ,"4c9df655555cd57b108df00adcaaba23"
            ) as IPayLoad;
            
            //recuperar informações do usuário
            req.user_id = sub;
            
            return next();
            
        } catch (err) {
            return res.status(401).end();
        }

        
        
    }
