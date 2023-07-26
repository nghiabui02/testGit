declare class ProductService {
    private HomesRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (homes: any) => Promise<void>;
}
declare const _default: ProductService;
export default _default;
