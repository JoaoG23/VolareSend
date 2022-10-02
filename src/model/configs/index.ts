class Configs {
    public hostname :any= process.env.HOST;
    public port = process.env.PORT_EMAIL;
    public user = process.env.USER;
    public password = process.env.SENHA;
}

export default new Configs;