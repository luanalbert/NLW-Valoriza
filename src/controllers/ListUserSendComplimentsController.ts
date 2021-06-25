import { Request, Response } from "express";
import { ListUserSendComplimentiesService } from "../services/ListUserSendeComplimentsService";



class ListUserSendComplimentsController {

    async handle(req: Request, res: Response){

        const { user_id } = req;

        const listUserSendComplimentsService = new ListUserSendComplimentiesService

        const compliments = await listUserSendComplimentsService.execute(user_id);
        
        return res.json(compliments);
    }
}

export {ListUserSendComplimentsController}