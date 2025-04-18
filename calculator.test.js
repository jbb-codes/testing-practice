const calculator = require("./calculator.js");

test("calc add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calc add", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("calc add", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("calc add", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});
