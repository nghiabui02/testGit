import {Router} from "express";
import RoomClassController from "../controller/RoomClassController";

const RoomClassRouter = Router();
RoomClassRouter.get('/', RoomClassController.findAll);
RoomClassRouter.post('/', RoomClassController.add);
RoomClassRouter.delete('/:id', RoomClassController.delete);
RoomClassRouter.put('/:id', RoomClassController.update);
RoomClassRouter.get('/:id', RoomClassController.findById);
RoomClassRouter.get('/', RoomClassController.findByName);

export default RoomClassRouter;
