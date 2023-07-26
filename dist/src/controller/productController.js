"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await productService_1.default.getAll();
            res.json(data);
        };
        this.addProduct = async (req, res) => {
            let listProduct = await productService_1.default.save(req.body);
            res.json(listProduct);
        };
        this.delete = async (req, res) => {
            let listProduct = await productService_1.default.delete(req.body.id);
            res.json(listProduct);
        };
        this.update = async (req, res) => {
            await productService_1.default.update(req.params.id, req.body);
            res.json('sửa thành công');
        };
        this.findByName = async (req, res) => {
            await productService_1.default.findByName(req.body);
            res.json('tim thay roi');
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map