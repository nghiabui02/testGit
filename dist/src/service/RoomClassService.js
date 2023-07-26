"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const roomClass_1 = require("../entity/roomClass");
class RoomClassService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(roomClass_1.roomClass);
        this.getAll = async () => {
            return await this.repository.find();
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (data) => {
            return await this.repository.delete({ id: data });
        };
        this.findById = async (data) => {
            return await this.repository.find({ where: { id: data } });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findByName = async (data) => {
            return await this.repository.find({ where: {
                    id: data
                } });
        };
    }
}
exports.default = new RoomClassService();
//# sourceMappingURL=RoomClassService.js.map