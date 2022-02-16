import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <>
      <div className="header">
        <div className="logo">The Connecting Wall</div>
        <div className="menu">
          <Link to="/" className="link">
            <div className="title">VIEW LIST</div>
            <div className="bar"></div>
          </Link>
          <Link to="/new-wall" className="link">
            <div className="title">CREATE A WALL</div>
            <div className="bar"></div>
          </Link>
        </div>
      </div>
    </>
  );
}
