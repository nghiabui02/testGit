declare class BlogService {
    private Repository;
    constructor();
    getAll: () => Promise<any>;
    add: (blogs: any) => Promise<void>;
}
declare const _default: BlogService;
export default _default;
