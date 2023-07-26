import {AppDataSource} from "../data-source";
import {roomClass} from "../entity/roomClass";

class RoomClassService {
    private repository = AppDataSource.getRepository(roomClass)

    getAll = async () => {
        return await this.repository.find()
    }
    save = async (data) => {
        return await this.repository.save(data)
    }
    delete = async (data) => {
        return await this.repository.delete({id:data})
    }
    findById = async (data) => {
        return await this.repository.find({where: {id: data}});
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findByName = async (data) =>{
        return await this.repository.find({where:{
            id: data
            }})
    }
}

export default new RoomClassService();
