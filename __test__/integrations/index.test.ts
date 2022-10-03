import request from "supertest";
import app from "../../src/app";
import { it, describe, expect } from "vitest";
import { destinario } from "../seeds";

describe("Envio de email", () => {
  describe("Quando os dados forem enviados ", () => {
    it("Deveria ser capaz de enviar todos os dados ao destinatario e retorna o status 200", async () => {
      const res = await request(app).post("/api/").send(destinario);

      expect(res.statusCode).toEqual(200);
    });
  });
  describe("Quando entrar na rota inicial ", () => {
    it("Deveria ser capaz de redirecionar para rota saudações do usuário e retorna o status 301", async () => {
      const res = await request(app).get("/");

      expect(res.statusCode).toEqual(302);
    });
  });
});
