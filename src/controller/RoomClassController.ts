import {Request, Response} from "express";
import RoomClassService from "../service/RoomClassService";


class RoomClassController{
    findAll = async (req: Request, res: Response) => {
        let data = await RoomClassService.getAll();
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await RoomClassService.save(req.body);
        res.json(data);
    }
    delete = async (req: Request, res: Response) => {
        console.log(req.params.id)
        let data = await RoomClassService.delete(req.params.id);
        res.json(data);
    }
    update = async (req: Request, res: Response) => {
        let data = await RoomClassService.update(req.params.id, req.body);
        res.json(data)
    }
    findById = async (req: Request, res: Response) => {
        let data = await RoomClassService.findById(req.params.id);
        res.json(data)
    }
    findByName = async (req: Request, res: Response)=>{
        let data = await RoomClassService.findByName(req.params.name)
        res.json(data)
    }
}

export default new RoomClassController();
