"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homesService_1 = __importDefault(require("../service/homesService"));
class HomesController {
    constructor() {
        this.findAll = async (req, res) => {
            let listProduct = await this.HomesService.getAll();
            res.json(listProduct);
        };
        this.HomesService = homesService_1.default;
    }
}
exports.default = new HomesController();
//# sourceMappingURL=homeController.js.map