const calculator = require("./calculator.js");

test("calc add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calc subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("calc multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("calc divide", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});
