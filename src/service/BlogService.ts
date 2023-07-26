import {AppDataSource} from "../data-source";
import {blog} from "../entity/blog";

class BlogService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(blog);
    }

    getAll = async () => {
        return await this.Repository.find();
    }

    add = async (blogs) => {
        await this.Repository.save(blogs)
    }
}

export default new BlogService();
