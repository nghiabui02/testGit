import {Router} from "express";
import BlogController from "../controller/BlogController";

const BlogRouter = Router();
BlogRouter.get('/', BlogController.findAll);
export default BlogRouter;
