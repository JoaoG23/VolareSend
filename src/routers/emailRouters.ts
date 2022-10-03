import { Router } from "express";
import EmailController from "../controllers/EmailController";
const routers = Router();

routers.get('/', EmailController.welcome );
routers.post('/', EmailController.send );

export default routers;