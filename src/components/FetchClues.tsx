import { useEffect, useState } from "react";
import axios from "axios";
import CluesProps from "./CluesProps";
import DisplayGrid from "./DisplayGrid";

const apiBaseURL = process.env.REACT_APP_API_BASE;
const clue_id = 2;

export default function FetchClues(): JSX.Element {
  const [wall, getWall] = useState<CluesProps>();
  useEffect(() => {
    getClues();
  }, []);

  async function getClues() {
    try {
      const response = await axios.get(
        `https://wall-game.herokuapp.com/wall/${clue_id}`
      );
      getWall(response.data.clues[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {wall && (
        <DisplayGrid
          id={wall.id}
          submit_time={wall.submit_time}
          user={wall.user}
          clue11={wall.clue11}
          clue12={wall.clue12}
          clue13={wall.clue13}
          clue14={wall.clue14}
          connection1={wall.connection1}
          explanation1={wall.explanation1}
          clue21={wall.clue21}
          clue22={wall.clue22}
          clue23={wall.clue23}
          clue24={wall.clue24}
          connection2={wall.connection2}
          explanation2={wall.explanation2}
          clue31={wall.clue31}
          clue32={wall.clue32}
          clue33={wall.clue33}
          clue34={wall.clue34}
          connection3={wall.connection3}
          explanation3={wall.explanation3}
          clue41={wall.clue41}
          clue42={wall.clue42}
          clue43={wall.clue43}
          clue44={wall.clue44}
          connection4={wall.connection4}
          explanation4={wall.explanation4}
        />
      )}
    </>
  );
}
