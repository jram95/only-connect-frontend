import CluesProps from "./CluesProps";
import shuffle from "../utils/shuffle";
import hasSameGroup from "../utils/hasSameGroup";
import { useEffect, useState } from "react";
import removeClues from "../utils/removeClues";
import SquaresAndButtons from "./SquaresAndButtons";
import SolvedWall from "./SolvedWall";

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
  const [shuffledClues, setShuffledClues] = useState<string[]>([]);
  const [selectedClues, setSelectedClues] = useState<string[]>([]);
  const [correctClues, setCorrectClues] = useState<string[]>([]);

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

  useEffect(() => {
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
    if (
      selectedClues.length === 4 &&
      hasSameGroup(selectedClues, groups) === false
    ) {
      setSelectedClues([]);
    }
    if (
      selectedClues.length === 4 &&
      hasSameGroup(selectedClues, groups) === true
    ) {
      setShuffledClues(shuffle(removeClues(selectedClues, shuffledClues)));
      if (correctClues.length === 0) {
        setCorrectClues(selectedClues);
      } else {
        setCorrectClues([...correctClues, ...selectedClues]);
      }
      setSelectedClues([]);
      if (correctClues.length === 12) {
        setCorrectClues([...correctClues, ...shuffledClues]);
      }
    }
  }, [
    correctClues,
    shuffledClues,
    selectedClues,
    connection1,
    connection2,
    connection3,
    connection4,
    explanation1,
    explanation2,
    explanation3,
    explanation4,
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
  ]);

  useEffect(() => {
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
    setShuffledClues(shuffle(clues));
  }, [
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
  ]);

  return (
    <>
      {correctClues.length === 16 ? (
        <SolvedWall correctClues={correctClues} groups={groups} />
      ) : (
        <SquaresAndButtons
          setSelectedClues={setSelectedClues}
          selectedClues={selectedClues}
          shuffledClues={shuffledClues}
          correctClues={correctClues}
        />
      )}
      <p>
        Submitted by {user} at {submit_time}
      </p>
    </>
  );
}
