export default function isInGroup(
  word: string,
  groups: GroupsProps[]
): number | undefined {
  let count = 1;
  for (const group of groups) {
    if (group["clues"].includes(word)) {
      return count;
    }
    count++;
  }
}

export interface GroupsProps {
  connection: string;
  clues: string[];
}
