import { Dispatch, SetStateAction } from "react";

export default interface SquaresAndButtonsProps {
  setSelectedClues: Dispatch<SetStateAction<string[]>>;
  selectedClues: string[];
  remainingClues: string[];
  correctClues: string[];
}
