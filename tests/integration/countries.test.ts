import { createApp } from "#src/app";
import type { Country } from "#src/countries/countries.types";
import request from "supertest";
import { createTestDb } from "../helpers/createTestDb.ts";

describe("Countries API", () => {
  describe("GET /countries", () => {
    it.skip("should return a list of countries", async () => {
      const TEST_DATABASE = createTestDb();
      const TEST_COUNTRIES: ReadonlyArray<Country> = [
        { code: "AR", name: "Argentina" },
        { code: "ES", name: "España" },
      ];
      await insertCountries(TEST_DATABASE, TEST_COUNTRIES);
      const response = await request(createApp(TEST_DATABASE)).get(
        "/countries",
      );
      expect(response.status).toBe(200);
    });
  });
});
