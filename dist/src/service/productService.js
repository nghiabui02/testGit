"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(product_1.ProductPro);
        this.getAll = async () => {
            return await this.repository.find({
                relations: {
                    category: true,
                },
            });
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (data) => {
            return await this.repository.delete(data);
        };
        this.findById = async (data) => {
            return await this.repository.findOne({ where: { id: data } });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findByName = async (data) => {
            return await this.repository.find({
                where: {
                    name: "hihi"
                }
            });
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map