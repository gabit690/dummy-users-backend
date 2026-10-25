import BetterSqliDatabase from "better-sqlite3";
import type { Database } from "#src/database/database.types";
import { applySchema } from "./apply-schema.ts";

export function createDatabase(filename: string): Database {
  const db = new BetterSqliDatabase(filename, {
    verbose: process.env.NODE_ENV !== "test" ? console.info : undefined,
    timeout: 3000,
  });
  db.pragma("journal_mode = WAL");
  applySchema(db);
  return db;
}
