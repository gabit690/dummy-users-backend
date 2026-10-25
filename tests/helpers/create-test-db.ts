import { createDatabase } from "#src/database/create-database";
import type { Database } from "#src/database/database.types";

export function createTestDb(): Database {
  return createDatabase(":memory:");
}
