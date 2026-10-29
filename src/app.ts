import express from "express";
import type { Database } from "./database/database.types.ts";
import type { Country } from "./countries/countries.types.ts";
import {
  createCountry,
  getCountries,
  getCountryByCode,
} from "./countries/countries.repository.ts";

export function createApp(db: Database) {
  const app = express();
  app.use(express.json());

  app.get("/health", (req, res) => res.json({ status: "ok" }));
  app.post("/countries", (req, res) => {
    const NEW_COUNTRY: Country = req.body as Country;
    createCountry(db, NEW_COUNTRY);

    res.status(201).json();
  });
  app.get("/countries", (req, res) => {
    const countries: ReadonlyArray<Country> = getCountries(db);
    return res.json(countries);
  });
  app.get("/countries/:code", (req, res) => {
    res.status(200);
    const country = getCountryByCode(db, req.params.code);
    return res.json(country);
  });

  return app;
}
