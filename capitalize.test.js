const capitalize = require("./capitalize");

test("capitalizes first letter of string: odin", () => {
  expect(capitalize("odin")).toBe("Odin");
});

test("capitalizes first letter of string: adin", () => {
  expect(capitalize("adin")).toBe("Adin");
});

test("capitalizes first letter of string: gitten", () => {
  expect(capitalize("gitten")).not.toBe("gitten");
});
