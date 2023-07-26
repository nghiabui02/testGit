import {StudentPro} from "../entity/student";
import {AppDataSource} from "../data-source";
import {roomClass} from "../entity/roomClass";

class StudentService{
    private repository = AppDataSource.getRepository(StudentPro)

    getAll = async () => {
        return await this.repository.find({
            relations:{
                roomClass:true
            }
        });
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
    findByName = async (name) =>{
        return await this.repository.find({
            relations:{
                roomClass: true
            },
            where:{
                name
            },
        })
    }
    AVG = async () => {
        let data  =await this.repository.find({
            relations:{
                roomClass:true
            },
            order:
                {score: 'ASC'}
        })
        console.log(data)
        return data
    }
    DESC = async () => {
        let data  =await this.repository.find({
            relations:{
                roomClass:true
            },
            order:
                {score: 'DESC'}
        })
        console.log(data)
        return data
    }
}

export default new StudentService();
