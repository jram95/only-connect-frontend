// import { useState } from "react";
import { ButtonsProps } from "./ButtonsProps";

export default function Buttons({
  shuffledClues,
  setSelectedClues,
  selectedClues,
}: ButtonsProps): JSX.Element {
  const darkBlue = "rgb(43, 108, 184)";
  const lightBlue = "rgb(143, 184, 231)";

  function handleClick(clue: string) {
    if (selectedClues.length === 0) {
      setSelectedClues([clue]);
    } else {
      if (selectedClues.includes(clue)) {
        console.log("It has been selected twice");
      } else {
        setSelectedClues([...selectedClues, clue]);
      }
    }
  }

  return (
    <>
      <div className="game-container">
        <h1 className="wall-title">Solve the Connecting Wall!</h1>
        <div className="game-grid">
          {shuffledClues.map((clue, index) => (
            <div className="grid-button" key={index}>
              {selectedClues.includes(clue) ? (
                <button
                  className="button-clue"
                  value={clue}
                  onClick={() => handleClick(clue)}
                  style={{
                    fontSize: "large",
                    backgroundColor: darkBlue,
                    padding: "20px",
                    width: "96px",
                    height: "73px",
                    border: "1px solid",
                  }}
                >
                  {clue}
                </button>
              ) : (
                <button
                  className="button-clue"
                  value={clue}
                  onClick={() => handleClick(clue)}
                  style={{
                    fontSize: "large",
                    backgroundColor: lightBlue,
                    padding: "20px",
                    width: "96px",
                    height: "73px",
                    border: "1px solid",
                  }}
                >
                  {clue}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
