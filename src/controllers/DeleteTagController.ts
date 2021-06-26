import { Request, Response} from "express";
import { DeleteTagService } from "../services/DeleteTagService";

class DeleteTagController {
    async delete(req: Request, res: Response){
        const { id } = req.params;
        const deleteTagService = new DeleteTagService();

        await deleteTagService.execute(id);

        return res.sendStatus(204)

    }
}

export { DeleteTagController }