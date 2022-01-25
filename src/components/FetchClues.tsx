import { useEffect } from "react";
import axios from "axios";

const apiBaseURL = process.env.REACT_APP_API_BASE;
const clue_id = 1;

export default function FetchClues(): JSX.Element {
  useEffect(() => {
    getClues();
  }, []);

  async function getClues() {
    try {
      const response = await axios.get(`${apiBaseURL}wall/${clue_id}`);
      console.log(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Hi</h1>
    </>
  );
}
