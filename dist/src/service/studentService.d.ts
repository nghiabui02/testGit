import { StudentPro } from "../entity/student";
declare class StudentService {
    private repository;
    getAll: () => Promise<StudentPro[]>;
    save: (data: any) => Promise<any>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    findById: (data: any) => Promise<StudentPro[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByName: (name: any) => Promise<StudentPro[]>;
    AVG: () => Promise<StudentPro[]>;
    DESC: () => Promise<StudentPro[]>;
}
declare const _default: StudentService;
export default _default;
