import type { Database } from "./database.types.ts";

export function applySchema(database: Database) {
  database.exec(`
        CREATE TABLE IF NOT EXISTS countries (
            code TEXT PRIMARY KEY CHECK(length(code) = 3),
            name TEXT NOT NULL UNIQUE
        );
        `);
}
