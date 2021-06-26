import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";


class DeleteTagService {
    async execute(id: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        //validação se existe tag com id passado 
        const idValidation = await tagsRepositories.findOne({
            id,
        })


        //se não existir tag para o id passado
        if (!idValidation) {
            throw new Error("Tag does not exist")
        }
        const tagRemove = tagsRepositories.delete(id)

        return tagRemove;

    }
}

export { DeleteTagService }