export default function shuffle(cluesArray: string[]): string[] {
  for (let i = 0; i < cluesArray.length; i++) {
    const randomIndex = Math.floor(Math.random() * cluesArray.length);
    const temporary = cluesArray[randomIndex];
    cluesArray[randomIndex] = cluesArray[i];
    cluesArray[i] = temporary;
  }
  return cluesArray;
}
