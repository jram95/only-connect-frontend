import removeClues from "./removeClues";

describe("test array of 16 is filtered to 12", () => {
  const array1 = ["blue", "pink", "yellow", "red"];
  const array2 = [
    "green",
    "blue",
    "brown",
    "black",
    "red",
    "purple",
    "yellow",
    "mint",
    "mauve",
    "pink",
    "violet",
    "lilac",
    "navy",
    "orange",
    "lime",
    "white",
  ];

  const output = [
    "green",
    "brown",
    "black",
    "purple",
    "mint",
    "mauve",
    "violet",
    "lilac",
    "navy",
    "orange",
    "lime",
    "white",
  ];
  const length = 12;

  test("produces correct return array", () => {
    expect(removeClues(array1, array2)).toEqual(output);
  });
  test("return array has length 12", () => {
    expect(removeClues(array1, array2)).toHaveLength(length);
  });
});
