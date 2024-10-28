const sum = require("./sum");

test("adds 4 + 3 to equal 7", () => {
  expect(sum(4, 3)).toBe(7);
});

test("adds 3 + 4 to not equal 8", () => {
  expect(sum(3, 4)).not.toBe(8);
});
