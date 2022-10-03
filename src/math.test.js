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

describe("fibonacci", () => {});
