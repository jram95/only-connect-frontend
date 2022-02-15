import { ChangeEvent } from "react";

export default function InputClues(): JSX.Element {
  function handleInputClue(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <input
            className="col"
            placeholder="clue"
            onChange={(e) => handleInputClue(e)}
          />
          <input
            className="col"
            placeholder="clue"
            onChange={(e) => handleInputClue(e)}
          />
          <input
            className="col"
            placeholder="clue"
            onChange={(e) => handleInputClue(e)}
          />
          <input
            className="col"
            placeholder="clue"
            onChange={(e) => handleInputClue(e)}
          />
          <input
            className="col"
            placeholder="connection"
            onChange={(e) => handleInputClue(e)}
          />
        </div>
      </div>
    </>
  );
}
