import isInGroup from "./isInGroup";

describe("counts correctly", () => {
  test("is in group 2", () => {
    const input = [
      { connection: "lion king", clues: ["hakuna", "matata"] },
      { connection: "les miserables", clues: ["I", "dreamed", "a", "dream"] },
    ];
    const output = 2;

    expect(isInGroup("dream", input)).toEqual(output);
  });
});
