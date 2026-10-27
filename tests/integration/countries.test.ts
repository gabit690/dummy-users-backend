import { createApp } from "#src/app";
import type { Country } from "#src/countries/countries.types";
import request from "supertest";

import { insertCountries } from "#src/countries/countries.seed";
import { createTestDb } from "../helpers/create-test-db.ts";

describe("Countries API", () => {
  describe("POST /countries", () => {
    it("should create a new country", async () => {
      const TEST_DATABASE = createTestDb();
      const NEW_COUNTRY: Country = { code: "ARG", name: "Argentina" };
      const response = await request(createApp(TEST_DATABASE))
        .post("/countries")
        .send(NEW_COUNTRY);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(NEW_COUNTRY);
    });
  });

  describe("GET /countries", () => {
    it("should return a list of countries", async () => {
      const TEST_DATABASE = createTestDb();
      const TEST_COUNTRIES: ReadonlyArray<Country> = [
        { code: "ARG", name: "Argentina" },
        { code: "SPA", name: "España" },
      ];
      insertCountries(TEST_DATABASE, TEST_COUNTRIES);
      const response = await request(createApp(TEST_DATABASE)).get(
        "/countries",
      );
      expect(response.status).toBe(200);
      expect(response.body).toEqual(TEST_COUNTRIES);
    });
  });
});
