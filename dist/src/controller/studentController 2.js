"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
const studentService_2 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.findAll = async (req, res) => {
            let data;
            if (req.params.score === "ASC") {
                data = await studentService_2.default.AVG();
            }
            else if (req.params.score === "DESC") {
                data = await studentService_1.default.DESC();
            }
            else {
                data = await studentService_1.default.getAll();
            }
            console.log(data);
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await studentService_1.default.save(req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            console.log(req.params.id);
            let data = await studentService_1.default.delete(req.params.id);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await studentService_1.default.update(req.params.id, req.body);
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await studentService_1.default.findById(req.params.id);
            res.json(data);
        };
        this.findByName = async (req, res) => {
            let data = await studentService_1.default.findByName(req.query.name);
            res.json(data);
        };
        this.AVG = async (req, res) => {
            let data = await studentService_1.default.AVG();
            res.json(data);
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map