import CluesProps from "./CluesProps";
import shuffle from "../../utils/shuffle";
import hasSameGroup from "../../utils/hasSameGroup";
import { useEffect, useState } from "react";
import removeClues from "../../utils/removeClues";
import SquaresAndButtons from "./SquaresAndButtons";
import SolvedWall from "./SolvedWall";
import wrong from "../../sounds/wrong.mp3";
import correct from "../../sounds/correct.mp3";
import { useSound } from "use-sound";
import { linkStyle } from "../linkStyle";
import { Link } from "react-router-dom";

export default function DisplayGrid({
  id,
  submit_time,
  user,
  clue11,
  clue12,
  clue13,
  clue14,
  connection1,
  clue21,
  clue22,
  clue23,
  clue24,
  connection2,
  clue31,
  clue32,
  clue33,
  clue34,
  connection3,
  clue41,
  clue42,
  clue43,
  clue44,
  connection4,
}: CluesProps): JSX.Element {
  const [shuffledClues, setShuffledClues] = useState<string[]>([]);
  const [selectedClues, setSelectedClues] = useState<string[]>([]);
  const [correctClues, setCorrectClues] = useState<string[]>([]);
  const [playWrong] = useSound(wrong);
  const [playRight] = useSound(correct);

  const groups = [
    {
      connection: connection1,
      clues: [clue11, clue12, clue13, clue14],
    },
    {
      connection: connection2,
      clues: [clue21, clue22, clue23, clue24],
    },
    {
      connection: connection3,
      clues: [clue31, clue32, clue33, clue34],
    },
    {
      connection: connection4,
      clues: [clue41, clue42, clue43, clue44],
    },
  ];

  useEffect(() => {
    const groups = [
      {
        connection: connection1,
        clues: [clue11, clue12, clue13, clue14],
      },
      {
        connection: connection2,
        clues: [clue21, clue22, clue23, clue24],
      },
      {
        connection: connection3,
        clues: [clue31, clue32, clue33, clue34],
      },
      {
        connection: connection4,
        clues: [clue41, clue42, clue43, clue44],
      },
    ];
    if (
      selectedClues.length === 4 &&
      hasSameGroup(selectedClues, groups) === false
    ) {
      setSelectedClues([]);
      playWrong();
    }
    if (
      selectedClues.length === 4 &&
      hasSameGroup(selectedClues, groups) === true
    ) {
      playRight();
      setShuffledClues(shuffle(removeClues(selectedClues, shuffledClues)));
      if (correctClues.length === 0) {
        setCorrectClues(selectedClues);
      } else if (correctClues.length === 12) {
        console.log("correctClues has length 12");
        setCorrectClues([...correctClues, ...shuffledClues]);
      } else {
        setCorrectClues([...correctClues, ...selectedClues]);
      }
      setSelectedClues([]);
    }
  }, [
    playRight,
    playWrong,
    correctClues,
    shuffledClues,
    selectedClues,
    connection1,
    connection2,
    connection3,
    connection4,
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
      <div className="wall-title">
        <Link to="/" style={linkStyle}>
          Go back to homepage
        </Link>
      </div>
      <p className="top-padding">
        Submitted by {user} at {submit_time}
      </p>
    </>
  );
}
