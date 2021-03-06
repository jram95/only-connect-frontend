import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import IndividuWall from "./IndividuWall";
import NewWall from "./NewWall";

export default function WebsiteRoutes(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connecting-wall/:id" element={<IndividuWall />} />
          <Route path="/new-wall" element={<NewWall />} />
        </Routes>
      </Router>
    </>
  );
}
