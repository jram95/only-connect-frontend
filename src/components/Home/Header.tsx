import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <>
      <div className="header">
        <div className="logo">Connecting Wall</div>
        <div className="menu">
          <Link to="/" className="link">
            <div className="title">View List</div>
            <div className="bar"></div>
          </Link>
          <Link to="/new-wall" className="link">
            <div className="title">Create a wall</div>
            <div className="bar"></div>
          </Link>
        </div>
      </div>
    </>
  );
}
