import isInGroup from "./isInGroup";

export default function hasSameGroup(array: string[], groups: []) {
  const groupOfFirstWord = isInGroup(array[0], groups);
  for (let i = 1; i < array.length; i++) {
    if (isInGroup(array[i], groups) !== groupOfFirstWord) {
      return false;
    }
  }
  return true;
}
