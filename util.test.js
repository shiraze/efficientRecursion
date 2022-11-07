import { getSequenceValue } from "./util";

describe("getSequenceValue", () => {
  it("should return 1 when input is 1", () => {
    expect(getSequenceValue(1)).toBe(1);
  });

  it("should return 2 when input is 2", () => {
    expect(getSequenceValue(2)).toBe(2);
  });

  it("should return 2 when input is 3", () => {
    expect(getSequenceValue(3)).toBe(2);
  });

  it("should return 5 when input is 10", () => {
    expect(getSequenceValue(10)).toBe(5);
  });

  it("should return 7 when input is 16", () => {
    expect(getSequenceValue(16)).toBe(7);
  });

  it("should handle a large input", () => {
    expect(getSequenceValue(50)).toBeGreaterThanOrEqual(7);
  });

  it("should handle a larger input", () => {
    expect(getSequenceValue(150)).toBeGreaterThanOrEqual(7);
  });
});
