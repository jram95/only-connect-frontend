import { Dispatch, SetStateAction } from "react";
import { GridProps } from "./CluesProps";

export interface ButtonsProps {
  shuffledClues: string[];
  setSelectedClues: Dispatch<SetStateAction<string[]>>;
  selectedClues: string[];
}
