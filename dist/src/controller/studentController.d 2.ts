import { Request, Response } from "express";
declare class StudentController {
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<void>;
    AVG: (req: Request, res: Response) => Promise<void>;
}
declare const _default: StudentController;
export default _default;
