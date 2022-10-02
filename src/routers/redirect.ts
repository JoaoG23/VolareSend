import { Router } from "express";
import { Request, Response } from "express";
const routers = Router();

routers.use("/", (req: Request, res: Response) => {
  try {
    res.status(300).redirected("/api");
  } catch (error) {
    res.send(error);
  }
});

export default routers;
