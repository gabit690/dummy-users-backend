import { createApp } from "#src/app";
import type { Country } from "#src/countries/countries.types";
import request from "supertest";

import { insertCountries } from "#src/countries/countries.seed";
import { createTestDb } from "../helpers/create-test-db.ts";

describe("Countries API", () => {
  describe("POST /countries", () => {
    it("should create a new country", async () => {
      const TEST_DATABASE = createTestDb();
      const app = createApp(TEST_DATABASE);
      const response = await request(app)
        .post("/countries")
        .send({ code: "ARG", name: "Argentina" });
      expect(response.status).toBe(201);
    });

    it("should persist the new country", async () => {
      const TEST_DATABASE = createTestDb();
      const NEW_COUNTRY: Country = { code: "ARG", name: "Argentina" };
      const app = createApp(TEST_DATABASE);

      await request(app).post("/countries").send(NEW_COUNTRY);
      const response = await request(app).get("/countries");

      expect(response.body).toEqual([NEW_COUNTRY]);
    });
  });

  describe("GET /countries", () => {
    it("should return a list of countries", async () => {
      const TEST_DATABASE = createTestDb();
      const TEST_COUNTRIES: ReadonlyArray<Country> = [
        { code: "ARG", name: "Argentina" },
        { code: "SPA", name: "España" },
      ];
      const app = createApp(TEST_DATABASE);
      insertCountries(TEST_DATABASE, TEST_COUNTRIES);
      const response = await request(app).get("/countries");
      expect(response.status).toBe(200);
      expect(response.body).toEqual(TEST_COUNTRIES);
    });
  });

  describe("GET /countries/:code", () => {
    it("should return the countr with the given code", async () => {
      const TEST_DATABASE = createTestDb();
      const NEW_COUNTRY: Country = { code: "ARG", name: "Argentina" };
      const app = createApp(TEST_DATABASE);

      insertCountries(TEST_DATABASE, [NEW_COUNTRY]);
      const response = await request(app).get(`/countries/${NEW_COUNTRY.code}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(NEW_COUNTRY);
    });
  });
});
