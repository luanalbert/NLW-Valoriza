import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UserRepositories";


interface IauthenticateRequest{
    email: string;
    password:string;
}

class AuthenticateUserService {
    
    async execute({email, password}:IauthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        //se o email existir
        const user = await usersRepositories.findOne({
            email,
        });

        if(!user){
            throw new Error("Email/Password incorrect")//questão de segurança email ou senha
        }

        //se a senha ta correca
        const passwordMatch = await compare(password, user.password) //return boolean

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }
        //gerar o token
        const token = sign(
            {
            email:user.email
            },
            "4c9df655555cd57b108df00adcaaba23",
            {
            subject: user.id,
            expiresIn: "1d"
            }
        );
        return token;
    }
}

export { AuthenticateUserService };