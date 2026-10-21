import type Database from "better-sqlite3";
import express from "express";

export function createApp(db: Database) {
  const app = express();
  console.log(db);
  app.get("/health", (req, res) => res.json({ status: "ok" }));
  app.get("/countries", async (req, res) => {
    return res.json();
  });

  return app;
}
