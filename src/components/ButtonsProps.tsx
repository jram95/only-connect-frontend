import { Dispatch, SetStateAction } from "react";

export interface ButtonsProps {
  shuffledClues: string[];
  setSelectedClues: Dispatch<SetStateAction<string[]>>;
  selectedClues: string[];
}
