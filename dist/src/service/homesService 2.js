"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homes_1 = require("../entity/homes");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let homes = await this.HomesRepository.find();
            return homes;
        };
        this.add = async (homes) => {
            await this.HomesRepository.save(homes);
        };
        this.HomesRepository = data_source_1.AppDataSource.getRepository(homes_1.Homes);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=homesService.js.map