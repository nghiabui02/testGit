import {Request, Response} from "express";
import ProductService from "../service/productService";

class ProductController {
    findAll = async (req: Request, res: Response) => {
        let data = await ProductService.getAll();
        res.json(data);
    }

    addProduct = async (req: Request, res: Response) => {
        let listProduct = await ProductService.save(req.body);
        res.json(listProduct);
    }
    delete = async (req: Request, res: Response) => {
        let listProduct = await ProductService.delete(req.body.id);
        res.json(listProduct);
    }
    update = async (req: Request, res: Response) => {
        await ProductService.update(req.params.id, req.body);
        res.json('sửa thành công')
    }
    findByName = async (req: Request, res: Response) => {
        await ProductService.findByName(req.body);
        res.json('tim thay roi')
    }
}

export default new ProductController();
