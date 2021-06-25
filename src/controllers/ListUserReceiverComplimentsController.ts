import { Request, Response } from "express";
import { ListUserReceiverComplimentiesService } from "../services/ListUserReceiverComplimentiesService";


class ListUserReceiveComplimentsController {

    async handle(req: Request, res: Response){

        const { user_id } = req;

        const listUserReceiveComplimentsService = new ListUserReceiverComplimentiesService;

        const compliments = await listUserReceiveComplimentsService.execute(user_id);
        
        return res.json(compliments);
    }
}

export {ListUserReceiveComplimentsController}