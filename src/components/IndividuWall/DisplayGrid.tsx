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
import Timer from "./Timer";

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
  const [playWrong] = useSound(wrong);
  const [playRight] = useSound(correct);
  const [timer, setTimer] = useState<number>(0);
  const [mins, setMins] = useState<number>(0);
  const [secs, setSecs] = useState<number>(0);

  useEffect(() => {
    const timeInMins = Math.floor(timer / 60);
    setMins(timeInMins);
    const timeInSecs = timer - timeInMins * 60;
    setSecs(timeInSecs);
  }, [timer]);

  function displaySeconds(timeInSecs: number) {
    if (timeInSecs < 10) {
      return `0${timeInSecs.toString()}`;
    }
  }

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
      <Timer setTimer={setTimer} />
      <div>
        {mins}:{secs}
      </div>
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
