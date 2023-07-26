import { Request, Response } from "express";
declare class HomesController {
    private HomesService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomesController;
export default _default;
