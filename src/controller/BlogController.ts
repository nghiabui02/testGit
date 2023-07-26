import {Request, Response} from "express";
import BlogService from "../service/BlogService";


class BlogController {
    private BlogService;

    findAll = async (req: Request, res: Response) => {
        let blog = await BlogService.getAll();
        res.json(blog);
    }
    add = async (req: Request, res: Response) => {
        let blog = await BlogService.add(req.body);
        res.json(blog);
    }
    delete = async (req: Request, res: Response) => {
        console.log(req.params.id)
        let data = await BlogService.delete(rgit eq.params.id);
        res.json(data);
    }

    update = async (req: Request, res: Response) => {
        let blog = await  this.BlogService.update(req.params.id, req.body)
        res.json(blog)
    }

}

export default new BlogController();
