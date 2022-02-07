import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";
import Home from "./Home";

export default function WebsiteRoutes(): JSX.Element {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </>
  );
}
