import { useState } from "react";
import isInGroup from "../../utils/isInGroup";
import { SolvedWallProps } from "./SolvedWallProps";

export default function SolvedWall({
  correctClues,
  groups,
}: SolvedWallProps): JSX.Element {
  const [buttonText1, setButtonText1] = useState<string>("Reveal");
  const [buttonText2, setButtonText2] = useState<string>("Reveal");
  const [buttonText3, setButtonText3] = useState<string>("Reveal");
  const [buttonText4, setButtonText4] = useState<string>("Reveal");

  const connections = groups.map((group) => group.connection);
  console.log(connections);

  function handle1Click() {
    const group = isInGroup(correctClues[0], groups);
    if (group) {
      setButtonText1(connections[group - 1]);
    }
  }

  function handle2Click() {
    const group = isInGroup(correctClues[4], groups);
    if (group) {
      setButtonText2(connections[group - 1]);
    }
  }

  function handle3Click() {
    const group = isInGroup(correctClues[8], groups);
    if (group) {
      setButtonText3(connections[group - 1]);
    }
  }

  function handle4Click() {
    const group = isInGroup(correctClues[12], groups);
    if (group) {
      setButtonText4(connections[group - 1]);
    }
  }

  return (
    <>
      <div>
        <div className="game-container">
          <h1 className="wall-title">You've solved the Wall!</h1>
          <div className="game-grid">
            {correctClues.map((clue, index) => (
              <div className="grid-button" key={index}>
                <button
                  className="button-clue"
                  value={clue}
                  style={{
                    fontSize: "large",
                    backgroundColor: "#FA8072",
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

          <div className="connections-container">
            <div className="reveal-buttons">
              <div>
                <h3>Click to reveal the connections</h3>
                <div>
                  <p>Connection 1:</p>
                  <button
                    className="button-inline"
                    onClick={handle1Click}
                    style={{
                      fontSize: "medium",
                      backgroundColor: "#D3D3D3",
                      padding: "10px",
                      width: "110px",
                      height: "60px",
                      border: "1px solid",
                    }}
                  >
                    {buttonText1}
                  </button>
                </div>
              </div>
              <div>
                <p>Connection 2:</p>
                <button
                  onClick={handle2Click}
                  style={{
                    fontSize: "medium",
                    backgroundColor: "#D3D3D3",
                    padding: "10px",
                    width: "110px",
                    height: "60px",
                    border: "1px solid",
                  }}
                >
                  {buttonText2}
                </button>
              </div>
              <div>
                <p>Connection 3:</p>
                <button
                  onClick={handle3Click}
                  style={{
                    fontSize: "medium",
                    backgroundColor: "#D3D3D3",
                    padding: "10px",
                    width: "110px",
                    height: "60px",
                    border: "1px solid",
                  }}
                >
                  {buttonText3}
                </button>
              </div>
              <div>
                <p>Connection 4:</p>
                <button
                  onClick={handle4Click}
                  style={{
                    fontSize: "medium",
                    backgroundColor: "#D3D3D3",
                    padding: "10px",
                    width: "110px",
                    height: "60px",
                    border: "1px solid",
                  }}
                >
                  {buttonText4}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
