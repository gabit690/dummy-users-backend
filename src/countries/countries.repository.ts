import type { Database } from "#src/database/database.types";
import type { Country } from "./countries.types.ts";

export function getCountries(database: Database): Array<Country> {
  const countries = database
    .prepare(`SELECT * FROM countries`)
    .all() as Array<Country>;
  return countries;
}

export function createCountry(database: Database, country: Country): Country {
  const countryCreated = database
    .prepare(
      `INSERT INTO countries (code, name) VALUES (@code, @name) RETURNING *`,
    )
    .get(country) as Country;

  return countryCreated;
}
