import nodeMailer from "nodemailer";

import configs from "../../model/configs";

class Email {
  public emailDestino: string;
  public conteudo: any;
  public assunto: string;
  public isCarregando: boolean;

  constructor(emailDestino: string, assunto: string, contudo: any) {
    this.emailDestino = emailDestino;
    this.conteudo = contudo;
    this.assunto = assunto;
    this.isCarregando = true;
  }

  public async enviar() {
    const user = configs.user;
    const pass = configs.password;

    const transporter = nodeMailer.createTransport({
      host: 'smtp.office365.com',
      port:587,
      auth: { user, pass },
    });

    transporter
      .sendMail({
        from: user,
        to: this.emailDestino,
        subject: this.assunto,
        html: this.conteudo,
      })
      .then((info) => {
        console.info(info);
        return [info , this.isCarregando ? 'Carregando ....' :'Finalizado' ];
      })
      .catch((erro) => {
        console.error(erro);
        return [erro , this.isCarregando ? 'Carregando ....' :'Finalizado' ];
      }).finally(() => {
        this.isCarregando = false;
        console.log(this.isCarregando ? 'Carregando ....' :'Finalizado')
      })
  }
}

export default Email;
