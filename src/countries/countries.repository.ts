import type { Database } from "#src/database/database.types";
import type { Country } from "./countries.types.ts";

export function getCountries(database: Database): Array<Country> {
  const countries = database
    .prepare(`SELECT code, name FROM countries`)
    .all() as Array<Country>;
  return countries;
}

export function createCountry(database: Database, country: Country): void {
  database
    .prepare(`INSERT INTO countries (code, name) VALUES (@code, @name)`)
    .run(country);
}

export function getCountryByCode(database: Database, code: string): Country {
  const country = database
    .prepare(`SELECT code, name FROM countries WHERE code=@code`)
    .get({ code: code }) as Country;
  return country;
}
