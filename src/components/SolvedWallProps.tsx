export interface SolvedWallProps {
  correctClues: string[];
  groups: Groups[];
}

interface Groups {
  connection: string;
  explanation: string;
  clues: string[];
}
