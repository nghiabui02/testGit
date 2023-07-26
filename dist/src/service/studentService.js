"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("../entity/student");
const data_source_1 = require("../data-source");
class StudentService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(student_1.StudentPro);
        this.getAll = async () => {
            return await this.repository.find({
                relations: {
                    roomClass: true
                }
            });
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
        this.findByName = async (name) => {
            return await this.repository.find({
                relations: {
                    roomClass: true
                },
                where: {
                    name
                },
            });
        };
        this.AVG = async () => {
            let data = await this.repository.find({
                relations: {
                    roomClass: true
                },
                order: { score: 'ASC' }
            });
            console.log(data);
            return data;
        };
        this.DESC = async () => {
            let data = await this.repository.find({
                relations: {
                    roomClass: true
                },
                order: { score: 'DESC' }
            });
            console.log(data);
            return data;
        };
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map