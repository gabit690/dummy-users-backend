import express from "express";
import type { Database } from "./database/database.types.ts";
import type { Country } from "./countries/countries.types.ts";
import { getCountries } from "./countries/countries.repository.ts";

export function createApp(db: Database) {
  const app = express();
  app.get("/health", (req, res) => res.json({ status: "ok" }));
  app.get("/countries", async (req, res) => {
    const countries: ReadonlyArray<Country> = getCountries(db);
    return res.json(countries);
  });

  return app;
}
