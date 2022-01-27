export default function removeClues(
  selected: string[],
  shuffled: string[]
): string[] {
  const removeClues = selected.map((clue) => shuffled.indexOf(clue));
  const cluesLeft = shuffled.filter(
    (clue, index) => !removeClues.includes(index)
  );
  return cluesLeft;
}
