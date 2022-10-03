//!node module formatı import
const {
  calculateTotal,
  fahrenheitToCelsius,
  fibonacci,
  celsiusToFahrenheit,
} = require("./math.js");

//!es6 module formatı
// import{calculateTotal,fahrenheitToCelsius,fibonacci,celsiusToFahrenheit} from "./math"

describe("calculateTotal", () => {
  it("should exist", () => {
    expect(calculateTotal).toBeDefined();
  });
  it("should return a number", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });
  it("should return with default WAT", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});

describe("celsiusToFahrenheit", () => {});

describe("fahrenheitToCelsius", () => {});

describe("fibonacci", () => {
  it("should exist", () => {
    expect(fibonacci).toBeDefined();
  });
  it("should return a number", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 55 for 10th index", () => {
    expect(fibonacci(10)).toBe(55);
  });
  it("should throw error if less than 1", () => {
    expect(() => fibonacci(0)).toThrow(
      new Error("Must enter a number greater than 0")
    );
  });

  it("should return 1 for none", () => {
    expect(fibonacci()).toBe(1);
  });
});
