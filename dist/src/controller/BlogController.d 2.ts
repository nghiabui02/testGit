import { Request, Response } from "express";
declare class BlogController {
    private BlogService;
    findAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: BlogController;
export default _default;
