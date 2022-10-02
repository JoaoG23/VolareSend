import { Router } from "express";
import EmailController from "../controllers/EmailController";
const routers = Router();

routers.post('/', EmailController.send );

export default routers;