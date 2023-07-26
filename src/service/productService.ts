import {ProductPro} from "../entity/product";
import {AppDataSource} from "../data-source";

class ProductService {
    private repository = AppDataSource.getRepository(ProductPro)

    getAll = async () => {
        return await this.repository.find({
            relations: {
                category: true,
            },
        });
    }
    // const user = await userRepository.findOne({ id: 1 });
    // console.log(user.posts); // Output: [Post1, Post2, ...]
    save = async (data) => {
        return await this.repository.save(data)
    }
    delete = async (data) => {
        return await this.repository.delete(data)
    }
    findById = async (data) => {
        return await this.repository.findOne({where: {id: data}});
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findByName = async (data) =>{
        return await this.repository.find({
            where: {
                name:"hihi"
            }
        })
    }
}

export default new ProductService();
