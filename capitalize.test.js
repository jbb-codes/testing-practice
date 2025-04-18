const capitalize = require("./capitalize.js");

test("capitalize strings first letter", () => {
  expect(capitalize("bob")).toBe("Bob");
});
