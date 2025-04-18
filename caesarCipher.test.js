const caesarCipher = require("./caesarCipher.js");

test("cipher string", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("cipher string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("cipher string", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("cipher string", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
