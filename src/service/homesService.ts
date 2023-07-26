import {Homes} from "../entity/homes";
import {AppDataSource} from "../data-source";

class ProductService {
    private HomesRepository;
    constructor() {
        this.HomesRepository = AppDataSource.getRepository(Homes);
    }
    getAll = async () => {
        let homes = await this.HomesRepository.find();
        return homes;
    }
    add = async (homes) => {
        await this.HomesRepository.save(homes)
    }
}
export default new ProductService();
