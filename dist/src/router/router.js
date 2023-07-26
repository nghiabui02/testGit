"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const studentRouter_1 = __importDefault(require("./studentRouter"));
const homesRouter_1 = __importDefault(require("./homesRouter"));
const BlogRouter_1 = __importDefault(require("./BlogRouter"));
const RoomClassRouter_1 = __importDefault(require("./RoomClassRouter"));
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.use('/students', studentRouter_1.default);
router.use('/home', homesRouter_1.default);
router.use('/blogs', BlogRouter_1.default);
router.use('/roomClass', RoomClassRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map