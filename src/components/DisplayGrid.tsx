import CluesProps from "./CluesProps";
import shuffle from "../utils/shuffle";
import isInGroup from "../utils/isInGroup";
import hasSameGroup from "../utils/hasSameGroup";
import { useState } from "react";

export default function DisplayGrid({
  id,
  submit_time,
  user,
  clue11,
  clue12,
  clue13,
  clue14,
  connection1,
  explanation1,
  clue21,
  clue22,
  clue23,
  clue24,
  connection2,
  explanation2,
  clue31,
  clue32,
  clue33,
  clue34,
  connection3,
  explanation3,
  clue41,
  clue42,
  clue43,
  clue44,
  connection4,
  explanation4,
}: CluesProps): JSX.Element {
  const [selectedClues, getSelectedClues] = useState<string[]>([]);
  const groups = [
    {
      connection: connection1,
      explanation: explanation1,
      clues: [clue11, clue12, clue13, clue14],
    },
    {
      connection: connection2,
      explanation: explanation2,
      clues: [clue21, clue22, clue23, clue24],
    },
    {
      connection: connection3,
      explanation: explanation3,
      clues: [clue31, clue32, clue33, clue34],
    },
    {
      connection: connection4,
      explanation: explanation4,
      clues: [clue41, clue42, clue43, clue44],
    },
  ];

  const clues = [
    clue11,
    clue12,
    clue13,
    clue14,
    clue21,
    clue22,
    clue23,
    clue24,
    clue31,
    clue32,
    clue33,
    clue34,
    clue41,
    clue42,
    clue43,
    clue44,
  ];

  const shuffledClues = shuffle(clues);

  return (
    <>
      <h1>Hi</h1>
      <div className="game-grid">
        {shuffledClues.map((clue) => (
          <div className="grid-cell" key={clue}>
            <button>{clue}</button>
          </div>
        ))}
      </div>
    </>
  );
}
