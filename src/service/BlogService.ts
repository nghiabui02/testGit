import {AppDataSource} from "../data-source";
import {blog} from "../entity/blog";

class BlogService {
    private repository = AppDataSource.getRepository(blog);


    getAll = async () => {
        return await this.repository.find();
    }

    add = async (data) => {
        await this.repository.save(data)
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
}
// Nghia Sửa code
export default new BlogService();
