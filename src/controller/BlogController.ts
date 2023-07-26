import {Request, Response} from "express";


class BlogController {
    private BlogService;

    findAll = async (req: Request, res: Response) => {
        let blog = await this.BlogService.getAll();
        res.json(blog);
    }

    update = async (req: Request, res: Response) => {
        let blog = await  this.BlogService.update(req.params.id, req.body)
        res.json(blog)
    }

}

export default new BlogController();
