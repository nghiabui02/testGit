"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoomClassController_1 = __importDefault(require("../controller/RoomClassController"));
const RoomClassRouter = (0, express_1.Router)();
RoomClassRouter.get('/', RoomClassController_1.default.findAll);
RoomClassRouter.post('/', RoomClassController_1.default.add);
RoomClassRouter.delete('/:id', RoomClassController_1.default.delete);
RoomClassRouter.put('/:id', RoomClassController_1.default.update);
RoomClassRouter.get('/:id', RoomClassController_1.default.findById);
RoomClassRouter.get('/', RoomClassController_1.default.findByName);
exports.default = RoomClassRouter;
//# sourceMappingURL=RoomClassRouter.js.map