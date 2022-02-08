import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";
import Home from "./Home";
import IndividuWall from "./IndividuWall";
import NewWall from "./NewWall";

export default function WebsiteRoutes(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connecting-wall" element={<IndividuWall />} />
          <Route path="/new-wall" element={<NewWall />} />
        </Routes>
      </Router>
    </>
  );
}
