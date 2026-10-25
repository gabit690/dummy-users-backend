import type { Database } from "#src/database/database.types";
import type { Country } from "./countries.types.ts";

export function getCountries(database: Database): Array<Country> {
  const countries = database
    .prepare(`SELECT * FROM countries`)
    .all() as Array<Country>;
  return countries;
}
