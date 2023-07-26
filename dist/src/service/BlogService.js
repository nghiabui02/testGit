"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const blog_1 = require("../entity/blog");
class BlogService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(blog_1.blog);
        this.getAll = async () => {
            return await this.repository.find();
        };
        this.add = async (blogs) => {
            await this.repository.save(blogs);
        };
        this.delete = async (blogs) => {
            return await this.repository.delete({ id: blogs });
        };
    }
}
exports.default = new BlogService();
//# sourceMappingURL=BlogService.js.map