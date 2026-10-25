import request from "supertest";
import { createApp } from "#src/app";
import { createTestDb } from "../helpers/create-test-db.ts";

describe("GET /health", () => {
  it("should response 200 with status ok", async () => {
    const TEST_DATABASE = createTestDb();
    const response = await request(createApp(TEST_DATABASE)).get("/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});
