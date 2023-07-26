import { blog } from "../entity/blog";
declare class BlogService {
    private repository;
    getAll: () => Promise<blog[]>;
    add: (blogs: any) => Promise<void>;
    delete: (blogs: any) => Promise<import("typeorm").DeleteResult>;
}
declare const _default: BlogService;
export default _default;
