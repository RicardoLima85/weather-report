// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { NumberValid } from "./number";

describe("Number", () => {
  test("should pass correctly on valid numbers", async () => {
    expect(() => new NumberValid("1")).not.toThrow();
  });
  test("should throw an error on invalid number", async () => {
    expect(() => new NumberValid("abc")).toThrow();
  });
});
