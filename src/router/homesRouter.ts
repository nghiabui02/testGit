import {Router} from "express";
import homeController from "../controller/homeController";

const productRouter = Router();
productRouter.get('/', homeController.findAll);
export default productRouter;
