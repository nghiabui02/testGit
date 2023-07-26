"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const productRouter = (0, express_1.Router)();
productRouter.get('/', productController_1.default.findAll);
productRouter.post('/', productController_1.default.addProduct);
productRouter.delete('/', productController_1.default.delete);
productRouter.put('/:id', productController_1.default.update);
productRouter.delete('', productController_1.default.delete);
productRouter.get('', productController_1.default.findByName);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map