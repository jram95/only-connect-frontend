export default function isInGroup(word: string, groups: []) {
  let count = 1;
  for (const group of groups) {
    if (Object.values(group).includes(word)) {
      return count;
    } else {
      count++;
    }
  }
}
