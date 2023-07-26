import {Request, Response} from "express";
import * as fs from "fs";
import homesService from "../service/homesService";
import homeController from "./homeController";

class HomesController {
    private HomesService;

    constructor() {
        this.HomesService = homesService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.HomesService.getAll();
        res.json(listProduct);
    }

}

export default new HomesController();
