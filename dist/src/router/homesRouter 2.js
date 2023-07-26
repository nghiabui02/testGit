"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = __importDefault(require("../controller/homeController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', homeController_1.default.findAll);
exports.default = productRouter;
//# sourceMappingURL=homesRouter.js.map