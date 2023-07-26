"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoomClassService_1 = __importDefault(require("../service/RoomClassService"));
class RoomClassController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await RoomClassService_1.default.getAll();
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await RoomClassService_1.default.save(req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            console.log(req.params.id);
            let data = await RoomClassService_1.default.delete(req.params.id);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await RoomClassService_1.default.update(req.params.id, req.body);
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await RoomClassService_1.default.findById(req.params.id);
            res.json(data);
        };
        this.findByName = async (req, res) => {
            let data = await RoomClassService_1.default.findByName(req.params.name);
            res.json(data);
        };
    }
}
exports.default = new RoomClassController();
//# sourceMappingURL=RoomClassController.js.map