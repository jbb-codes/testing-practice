const calculator = require("./calculator.js");

test("calc add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

<<<<<<< HEAD
test("calc subtract", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("calc multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("calc divide", () => {
=======
test("calc add", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("calc add", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("calc add", () => {
>>>>>>> 3de3d3027e6e7bc4a165d3c7699a74bc88dbf875
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});
