import {Request, Response} from "express";
import StudentService from "../service/studentService";
import studentService from "../service/studentService";

class StudentController {
    findAll = async (req: Request, res: Response) => {
        let data
        if(req.params.score === "ASC"){
            data = await studentService.AVG();
        }else if(req.params.score === "DESC"){
            data =await  StudentService.DESC()
        } else {
            data = await StudentService.getAll();
        }
        console.log(data)
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await StudentService.save(req.body);
        res.json(data);
    }
    delete = async (req: Request, res: Response) => {
        console.log(req.params.id)
        let data = await StudentService.delete(req.params.id);
        res.json(data);
    }
    update = async (req: Request, res: Response) => {
        let data = await StudentService.update(req.params.id, req.body);
        res.json(data)
    }
    findById = async (req: Request, res: Response) => {
        let data = await StudentService.findById(req.params.id);
        res.json(data)
    }
    findByName = async (req: Request, res: Response) => {
        let data = await StudentService.findByName(req.query.name);
        res.json(data)
    }
    AVG = async (req: Request, res: Response) => {
        let data = await StudentService.AVG();
        res.json(data);
    }
}

export default new StudentController();
