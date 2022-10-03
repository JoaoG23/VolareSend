import { Router } from "express";
import { Request, Response } from "express";
const routers = Router();

routers.get("/", (req: Request, res: Response) => {
  try {
       res.status(302).redirect("/api/");
  } catch (error) {
    res.send(error);
  }
});

export default routers;
