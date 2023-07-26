import { ProductPro } from "../entity/product";
declare class ProductService {
    private repository;
    getAll: () => Promise<ProductPro[]>;
    save: (data: any) => Promise<any>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    findById: (data: any) => Promise<ProductPro>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByName: (data: any) => Promise<ProductPro[]>;
}
declare const _default: ProductService;
export default _default;
