import { roomClass } from "../entity/roomClass";
declare class RoomClassService {
    private repository;
    getAll: () => Promise<roomClass[]>;
    save: (data: any) => Promise<any>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    findById: (data: any) => Promise<roomClass[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByName: (data: any) => Promise<roomClass[]>;
}
declare const _default: RoomClassService;
export default _default;
