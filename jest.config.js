import { createDefaultEsmPreset } from "ts-jest";

const esmPreset = createDefaultEsmPreset();

/** @type {import("jest").Config} **/
const base = {
  ...esmPreset,
  testEnvironment: "node",
  moduleNameMapper: {
    "^#src/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.[jt]s$": "$1",
  },
};

/** @type {import("jest").Config} **/
export default {
  projects: [
    {
      ...base,
      displayName: "unit",
      testMatch: ["<rootDir>/tests/unit/**/*.test.ts"],
    },
    {
      ...base,
      displayName: "integration",
      testMatch: ["<rootDir>/tests/integration/**/*.test.ts"],
    },
  ],
};
