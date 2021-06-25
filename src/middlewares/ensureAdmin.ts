import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(
    req:Request, 
    res: Response, 
    next: NextFunction
) {

    const { user_id } = req;

    const usersRepositories = getCustomRepository(UsersRepositories);
    
    const { admin } = await usersRepositories.findOne(user_id)

    //verificar se o usuario é admin
        
    if(admin){
        return next()
    }

    return res.status(401).json({
        error: "UNAUTHORIZED",
    })
}