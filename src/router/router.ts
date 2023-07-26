import {Router} from "express";
import productRouter from "./productRouter";
import studentRouter from "./studentRouter";
import homesRouter from "./homesRouter";
import blogRouter from "./BlogRouter";
import RoomClassRouter from "./RoomClassRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/students', studentRouter);
router.use('/home', homesRouter);
router.use('/blogs', blogRouter);
router.use('/roomClass', RoomClassRouter);

export default router;
