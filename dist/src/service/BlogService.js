"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const blog_1 = require("../entity/blog");
class BlogService {
    constructor() {
        this.getAll = async () => {
            return await this.Repository.find();
        };
        this.add = async (blogs) => {
            await this.Repository.save(blogs);
        };
        this.add1 = async (blogs) => {
            await this.Repository.save1(blogs);
        };
        this.edit2 = async (blogs) => {
            await this.Repository.edit2(blogs);
        };
        this.Repository = data_source_1.AppDataSource.getRepository(blog_1.blog);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=BlogService.js.map