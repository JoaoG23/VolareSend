 <img width='130px' align=right src="./assets/logo.svg">

# VolareSend

Surfando também na onda de micro serviços, **VolareSend** é serviço de geração de separo de e-mails utilizado em minhas aplicações. Promove baixo acoplamento e reaproveitamento de código.

<h2> Indice 🗂️</h2>

<p align="center">
 <li> <a href="#edicoes">0 - 🪡Edições</a> •</li>
 <li> <a href="#introdução">1 - 🚪Introdução</a> •</li>
 <li> <a href="#tech">2 - ⚙️ Tech Usadas</a> • </li>
 <li> <a href="#instalar">3 - 👇🤘 Como instalar</a> • </li>
 <li> <a href="#usar">4 - 🤘Como Usar</a> • </li>
 <li> <a href="#consideraçoesfinais">5 - Considerações finais </a> • </li>
 <li> <a href="#outros">6 -📁😅🤪 Coisa não tão relevantes</a> • </li>
 <li> <a href="#autor">7 -🧑‍💻 Autor</a> • </li>
 <li> <a href="#licensa"> 8- Licença</a> • </li>
</p>

<h2 id='edicoes'>Edições 🪡</h2>

Alterações   | Data | Versão
:---------: | :------: | :------:
Correção Bugs erros | 06/09/2022 | 1.0.0
Emissão Inicial | 05/09/2022 | 1.0.0


<h2 id='introdução' color=green ><b>Introdução🚪</b></h2>

Devido as minhas demandas de serviços de mensageria criei esse serviço para servi minhas aplicação. Ele apenas envia e-mails tem somente uma rota.

<h2 id='tech' ><b>Techs Usadas 🦾</b></h2>

[![My Skills](https://skillicons.dev/icons?i=js,ts,nodejs)](https://skillicons.dev)
 <img src="./assets/nodemailer.png" width="60px;" alt=""/>

**• Javacript**
**• Typescript**
**• Nodejs**
**• NodeMailer**

<h2 id='instalar'><b>3- Como instalar 🧑‍🔧</b></h2>

1.	Clone o código
2.	Digite um npm install
3.  Criar um arquivo .env e colocar as informações do servidor de email como abaixo:

        SENHA=
        USER=
        HOST=
        PORT_EMAIL=
        PORT_SERVER=

3.	Basta somente iniciar o servidor e usar.


<h2 id='usar'><b>4- Como usar 👩‍💻</b></h2>

1. Inicie o servidor com **npm start ou npm run dev**
1. Somente com uma rota, basta enviar no corpo da requisição esse dados.


        {
            "destinario":"emaildestino@email.com",
            "assunto":"TESTE ENVIO de Emails",
            "corpo":"Escreva aqui o corpo do email"
        }



<h2 id='consideraçoesfinais'><b>5 -🥺😭 Considerações finais</b></h2>

Muito obrigado a todos que visualizaram esse repositório, fico muito feliz por isso.

<h2 id='autor'><b>8 - Autor ✍🏻</b></h2>

 <img style="border-radius:50%;" src="https://avatars.githubusercontent.com/u/80895578?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Joao Guilherme</b></sub></a> <a href="https://github.com/JoaoG23/">🚀</a>

Feito com 🤭 por Joao Guilherme 👋🏽 Entre em contato!

[![Linkedin Badge](https://shields.io/badge/-Joao-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jaoo/)](https://www.linkedin.com/in/joaog123/)
[![Badge](https://shields.io/badge/-joaoguilherme94@live.com-c80?style=flat-square&logo=Microsoft&logoColor=white&link=mailto:joaoguilherme94@live.com)](mailto:joaoguilherme94@live.com)

<h2 id='licenca'><b>8 - Licença</b></h2>

[![Licence](https://shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

