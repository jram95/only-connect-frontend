import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CluesProps from "../IndividuWall/CluesProps";
import { linkStyle } from "../linkStyle";

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
      <div className="rules-box">
        <h3 className="title-padding">Most recent walls</h3>
        <p>
          {recentWalls.map((item) => (
            <div key={item.id} style={{ paddingBottom: "20px" }}>
              <Link to={`/connecting-wall/${item.id}`} style={linkStyle}>
                Wall {item.id}
                <br />
              </Link>
            </div>
          ))}
        </p>
      </div>
    </>
  );
}
