import {Router} from "express";
import productController from "../controller/productController";

const productRouter = Router();
productRouter.get('/', productController.findAll);
productRouter.post('/', productController.addProduct);
productRouter.delete('/', productController.delete);
productRouter.put('/:id', productController.update);
productRouter.delete('', productController.delete);
productRouter.get('', productController.findByName);
export default productRouter;
