"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlogController_1 = __importDefault(require("../controller/BlogController"));
const BlogRouter = (0, express_1.Router)();
BlogRouter.get('/', BlogController_1.default.findAll);
BlogRouter.delete('/:id', BlogController_1.default.delete);
exports.default = BlogRouter;
//# sourceMappingURL=BlogRouter.js.map