import { useState } from "react";
import { ButtonsProps } from "./ButtonsProps";

export default function Buttons({
  shuffledClues,
  setSelectedClues,
  selectedClues,
}: ButtonsProps): JSX.Element {
  const [highlightButton, setHighlightButton] = useState<boolean>(false);

  function handleClick(clue: string) {
    setHighlightButton(true);
    if (selectedClues.length === 0) {
      setSelectedClues([clue]);
    } else {
      setSelectedClues([...selectedClues, clue]);
    }
  }
  return (
    <>
      <div className="game-container">
        <h1 className="wall-title">Solve the Connecting Wall!</h1>
        <div className="game-grid">
          {shuffledClues.map((clue) => (
            <div className="grid-button" key={clue}>
              <button
                className="button-clue"
                onClick={() => handleClick(clue)}
                style={{
                  fontSize: "large",
                  backgroundColor:
                    highlightButton === true
                      ? "rgb(43, 108, 184)"
                      : "rgb(143, 184, 231)",
                  padding: "20px",
                  width: "96px",
                  height: "73px",
                  border: "1px solid",
                }}
              >
                {clue}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
