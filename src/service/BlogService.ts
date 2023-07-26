import {AppDataSource} from "../data-source";
import {blog} from "../entity/blog";

class BlogService {
    private repository = AppDataSource.getRepository(blog)
    getAll = async () => {
        return await this.repository.find();
    }
    add = async (blogs) => {
        await this.repository.save(blogs)
    }
    delete = async (blogs) => {
        return await this.repository.delete({id:blogs})
    }
    //xong them va xoa

}
// Nghia Sửa code
export default new BlogService();
