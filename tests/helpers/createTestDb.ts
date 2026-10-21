import BetterSqlite3 from "better-sqlite3";

export function createTestDb() {
  const db = new BetterSqlite3(":memory");
  return db;
}
