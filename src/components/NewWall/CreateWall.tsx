import { useState } from "react";
import InputClues from "./InputClues";

export default function CreateWall(): JSX.Element {
  const [userWall, setUserWall] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  function handleCreateWall() {
    console.log("hello");
  }

  return (
    <>
      <div className="rules-box">
        <h3>Create your own wall</h3>
        <p>Create your own connecting wall by filling in the form below.</p>
      </div>
      <InputClues number={1} userWall={userWall} setUserWall={setUserWall} />
      <InputClues number={2} userWall={userWall} setUserWall={setUserWall} />
      <InputClues number={3} userWall={userWall} setUserWall={setUserWall} />
      <InputClues number={4} userWall={userWall} setUserWall={setUserWall} />
      <button
        onClick={() => {
          handleCreateWall();
        }}
      >
        Generate Wall
      </button>
    </>
  );
}
