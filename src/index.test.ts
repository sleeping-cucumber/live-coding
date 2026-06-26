import { describe, it, expect } from "vitest";
import { greet } from "./index";

describe("greet", () => {
  it("returns a greeting with the given name", () => {
    expect(greet("world")).toBe("Hello, world!");
  });

  it("works with any name", () => {
    expect(greet("Pavel")).toBe("Hello, Pavel!");
  });
});
