import { Request, response, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"

class CreateUserController{

    async handle(req: Request, res: Response) {

        const { name, email, admin} = req.body;
    
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin});

        return response.json(user);
    }
}

export { CreateUserController }

/**
 * server -> routes -> Controller -> Service
 */