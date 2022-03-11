import hasSameGroup from "./hasSameGroup";

describe("check words in an array are in the same group", () => {
  const groups = [
    {
      connection: "maths",
      clues: ["trig", "algebra", "circle theorems", "simultaneous equations"],
    },
    {
      connection: "geography",
      clues: ["planet", "ocean", "desert", "mountains"],
    },
  ];
  const arrayOfWords1 = ["planet", "trig", "desert", "ocean"];
  const arrayOfWords2 = ["planet", "mountains", "desert", "ocean"];

  test("check against first array", () => {
    expect(hasSameGroup(arrayOfWords1, groups)).toBe(false);
  });

  test("check against second array in a random order", () => {
    expect(hasSameGroup(arrayOfWords2, groups)).toBe(true);
  });
});
