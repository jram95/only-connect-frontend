export interface SolvedWallProps {
  correctClues: string[];
  groups: Groups[];
}

interface Groups {
  connection: string;
  clues: string[];
}
