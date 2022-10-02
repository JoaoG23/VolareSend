import { Request, Response } from "express";
import Email from "../services/sendEmail";

class EmailController {
  public async send(req: Request, res: Response) {
    try {
      const { destinario , assunto , corpo } = req.body;
      let gerarEnvio = await new Email(destinario,assunto,corpo);

      const enviado = await gerarEnvio.enviar();
     res.send(enviado);
     console.log(enviado);
    } catch (error) {
      res.status(404).send(error);
      console.error(error);
    }
  }

}

export default new EmailController();
