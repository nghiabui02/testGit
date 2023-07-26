"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlogService_1 = __importDefault(require("../service/BlogService"));
class BlogController {
    constructor() {
        this.findAll = async (req, res) => {
            let blog = await BlogService_1.default.getAll();
            res.json(blog);
        };
        this.add = async (req, res) => {
            let blog = await BlogService_1.default.add(req.body);
            res.json(blog);
        };
        this.delete = async (req, res) => {
            console.log(req.params.id);
            let data = await BlogService_1.default.delete(req.params.id);
            res.json(data);
        };
    }
}
exports.default = new BlogController();
//# sourceMappingURL=BlogController.js.map