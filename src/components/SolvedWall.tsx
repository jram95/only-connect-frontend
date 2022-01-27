import { SolvedWallProps } from "./SolvedWallProps";

export default function SolvedWall({
  correctClues,
  groups,
}: SolvedWallProps): JSX.Element {
  const connections = groups.map((group) => group.connection);
  console.log(connections);

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
        </div>
        <div className="connections-container">
          {[1, 2, 3, 4].map((element) => (
            <div key={element}>
              <label>
                Enter connection {element}:
                <input />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
