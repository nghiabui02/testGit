import {Router} from "express";
import BlogController from "../controller/BlogController";

const BlogRouter = Router();
BlogRouter.get('/', BlogController.findAll);
BlogRouter.delete('/:id', BlogController.delete);
BlogRouter.post('/', BlogController.add);

export default BlogRouter;
