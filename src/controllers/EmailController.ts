import { Request, Response } from "express";
import Email from "../services/sendEmail";

class EmailController {
  public async welcome(req: Request, res: Response) {
    try {
     res.send('Boas Vindas ao VolareSend');
    } catch (error) {
      res.status(400).send('Erro na internet');
      console.error(error)
    }
  }
  public async send(req: Request, res: Response) {
    try {
      const { destinario , assunto , corpo } = req.body;
      let gerarEnvio = await new Email(destinario,assunto,corpo);

      const enviado = await gerarEnvio.enviar();
     res.send({ situacao:true , msg:'Email sendo enviado com sucesso.'});
    } catch (error) {
      res.status(404).send({ situacao:false , msg:'Erro ao enviar o email.'});
      console.error(error);
    } finally {
      console.log({ situacao:true , msg:'Email enviado com sucesso.'})
    }
  }

}

export default new EmailController();
