import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";




class CreateTagSevice {

    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        //verificação se o nome ta preenchido
        if(!name){
            throw new Error ("Incorrect name!");
        }
        //verificação de existencia da tag
        const tagsAlreadyExists = await tagsRepositories.findOne({
            name,
        })
        //se existir não pode salvar a mesma tag
        if(tagsAlreadyExists){
            throw new Error ("Tag Already Exists!");
        }
        //se não existir a tag é salva
        const tag = tagsRepositories.create({
            name,
        })

        await tagsRepositories.save(tag);
        return tag;
    }
}


export { CreateTagSevice }