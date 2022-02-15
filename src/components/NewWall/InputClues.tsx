import { ChangeEvent } from "react";

export default function InputClues(): JSX.Element {
  function handleInputClue(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="form">
        <input placeholder="clue" onChange={(e) => handleInputClue(e)} />
        <input placeholder="clue" onChange={(e) => handleInputClue(e)} />
        <input placeholder="clue" onChange={(e) => handleInputClue(e)} />
        <input placeholder="clue" onChange={(e) => handleInputClue(e)} />
        <input placeholder="connection" onChange={(e) => handleInputClue(e)} />
      </div>
    </>
  );
}
