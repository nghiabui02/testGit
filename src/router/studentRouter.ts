import {Router} from "express";
import studentController from "../controller/studentController";

const StudentRouter = Router();
StudentRouter.get('/', studentController.findAll);
StudentRouter.post('/', studentController.add);
StudentRouter.delete('/:id', studentController.delete);
StudentRouter.put('/:id', studentController.update);
StudentRouter.get('/:id', studentController.findById);
StudentRouter.get('/', studentController.findByName);
StudentRouter.get('/score', studentController.AVG);

export default StudentRouter;
