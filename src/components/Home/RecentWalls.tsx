import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CluesProps from "../IndividuWall/CluesProps";

export default function RecentWalls(): JSX.Element {
  const [recentWalls, setRecentWalls] = useState<CluesProps[]>([]);
  async function fetchRecentWalls() {
    try {
      const response = await axios.get(
        "https://wall-game.herokuapp.com/recent-walls"
      );
      setRecentWalls(response.data.clues);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchRecentWalls();
  }, []);

  return (
    <>
      <p>Most recent</p>
      <p>
        {recentWalls.map((item) => (
          <Link to={`/connecting-wall/${item.id}`} key={item.id}>
            Wall {item.id}
          </Link>
        ))}
      </p>
    </>
  );
}
