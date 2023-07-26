"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = __importDefault(require("../controller/studentController"));
const StudentRouter = (0, express_1.Router)();
StudentRouter.get('/', studentController_1.default.findAll);
StudentRouter.post('/', studentController_1.default.add);
StudentRouter.delete('/:id', studentController_1.default.delete);
StudentRouter.put('/:id', studentController_1.default.update);
StudentRouter.get('/:id', studentController_1.default.findById);
StudentRouter.get('/', studentController_1.default.findByName);
StudentRouter.get('/score', studentController_1.default.AVG);
exports.default = StudentRouter;
//# sourceMappingURL=studentRouter.js.map