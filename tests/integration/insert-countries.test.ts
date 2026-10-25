import { insertCountries } from "#src/countries/countries.seed";
import type { Country } from "#src/countries/countries.types";
import { createTestDb } from "../helpers/create-test-db.ts";

describe("insertCountries", () => {
  it("should store all the given countries", () => {
    const db = createTestDb();
    const TEST_COUNTRIES: ReadonlyArray<Country> = [
      { code: "ARG", name: "Argentina" },
      { code: "SPA", name: "España" },
    ];
    insertCountries(db, TEST_COUNTRIES);

    const rows = db
      .prepare("SELECT code, name FROM countries ORDER BY code")
      .all();
    expect(rows).toEqual(TEST_COUNTRIES);
  });

  it("should insert nothing if one country fails (all or nothing)", () => {
    const db = createTestDb();

    expect(() =>
      insertCountries(db, [
        { code: "ARG", name: "Argentina" },
        { code: "ARG", name: "Duplicada" },
      ]),
    ).toThrow();

    const { n } = db.prepare("SELECT COUNT(*) AS n FROM countries").get() as {
      n: number;
    };
    expect(n).toBe(0);
  });
});
