const quektoid = require("./index");

test("quektoid returns a random sequence of a-z/0-9 of length 8", () => {
  expect(quektoid()).toMatch(/[a-z0-9]{8}/);
});
