declare class BlogService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (blogs: any) => Promise<void>;
    add1: (blogs: any) => Promise<void>;
    edit2: (blogs: any) => Promise<void>;
}
declare const _default: BlogService;
export default _default;
