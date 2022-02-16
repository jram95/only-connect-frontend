import { ChangeEvent, useEffect, useState } from "react";

export default function InputClues(props: {
  number: number;
  userWall: string[][];
  setUserWall: React.Dispatch<React.SetStateAction<string[][]>>;
}): JSX.Element {
  function handleInputClue(
    e: ChangeEvent<HTMLInputElement>,
    row: number,
    column: number
  ): void {
    const newWall = [...props.userWall];
    newWall[row][column] = e.target.value;
    props.setUserWall(newWall);
  }

  useEffect(() => {
    console.log(props.userWall);
  }, [props.userWall]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="group-number">Group {props.number}:</div>
          <div className="col">
            <input
              className="input-tile"
              placeholder="clue 1"
              onChange={(e) => handleInputClue(e, props.number - 1, 0)}
            />
          </div>
          <div className="col">
            <input
              className="input-tile"
              placeholder="clue 2"
              onChange={(e) => handleInputClue(e, props.number - 1, 1)}
            />
          </div>
          <div className="col">
            <input
              className="input-tile"
              placeholder="clue 3"
              onChange={(e) => handleInputClue(e, props.number - 1, 2)}
            />
          </div>
          <div className="col">
            <input
              className="input-tile"
              placeholder="clue 4"
              onChange={(e) => handleInputClue(e, props.number - 1, 3)}
            />
          </div>
          <div className="col">
            <input
              className="input-tile"
              placeholder={`connection ${props.number}`}
              onChange={(e) => handleInputClue(e, props.number - 1, 4)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
