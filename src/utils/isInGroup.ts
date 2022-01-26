export default function isInGroup(word: string, groups: GroupsProps[]) {
  let count = 1;
  for (const group of groups) {
    if (group["clues"].includes(word)) {
      return count;
    }
    count++;
  }
}

export interface GroupsProps {
  explanation: string;
  connection: string;
  clues: string[];
}
