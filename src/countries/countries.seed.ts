import type { Country } from "#src/countries/countries.types";
import type { Database } from "../database/database.types.ts";

export function insertCountries(
  database: Database,
  countries: ReadonlyArray<Country>,
): void {
  const insert = database.prepare(
    "INSERT INTO countries (code, name) VALUES (@code, @name)",
  );

  const insertMany = database.transaction((countries) => {
    for (const country of countries) insert.run(country);
  });

  insertMany(countries);
}
