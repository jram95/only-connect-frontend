import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { buttonStyle } from "../buttonStyle";
import { linkStyle } from "../linkStyle";
import InputClues from "./InputClues";
import InputUsername from "./InputUsername";

export default function CreateWall(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [userWall, setUserWall] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
  const [success, setSuccess] = useState<boolean>(false);

  async function handleCreateWall() {
    const response = await axios.post("http://localhost:4000/wall", {
      username: username,
      clue11: userWall[0][0],
      clue12: userWall[0][1],
      clue13: userWall[0][2],
      clue14: userWall[0][3],
      connection1: userWall[0][4],
      clue21: userWall[1][0],
      clue22: userWall[1][1],
      clue23: userWall[1][2],
      clue24: userWall[1][3],
      connection2: userWall[1][4],
      clue31: userWall[2][0],
      clue32: userWall[2][1],
      clue33: userWall[2][2],
      clue34: userWall[2][3],
      connection3: userWall[2][4],
      clue41: userWall[3][0],
      clue42: userWall[3][1],
      clue43: userWall[3][2],
      clue44: userWall[3][3],
      connection4: userWall[3][4],
    });
    if (response.data.status === "successful") {
      setSuccess(true);
    }
  }

  return (
    <>
      {!success && (
        <div>
          <div className="rules-box">
            <h3>Create your own wall</h3>
            <p>Create your own connecting wall by filling in the form below.</p>
          </div>
          <InputClues
            number={1}
            userWall={userWall}
            setUserWall={setUserWall}
          />
          <InputClues
            number={2}
            userWall={userWall}
            setUserWall={setUserWall}
          />
          <InputClues
            number={3}
            userWall={userWall}
            setUserWall={setUserWall}
          />
          <InputClues
            number={4}
            userWall={userWall}
            setUserWall={setUserWall}
          />
          <div className="top-left-padding">
            <div>Please enter a username: </div>
            <InputUsername setUsername={setUsername} />
          </div>
          <div className="button-padding">
            <button
              style={buttonStyle}
              onClick={() => {
                handleCreateWall();
              }}
            >
              Generate Wall
            </button>
            <Link to="/" style={linkStyle}>
              Go to homepage
            </Link>
          </div>
        </div>
      )}
      {success && (
        <div className="rules-box">
          <div>
            You have successfully submitted your wall! Go back to the homepage
            to view it.
          </div>
          <Link to="/" style={linkStyle}>
            Go to homepage
          </Link>
        </div>
      )}
    </>
  );
}
