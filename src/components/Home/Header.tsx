export default function Header(): JSX.Element {
  return (
    <>
      <div className="header">
        <div className="logo">Connecting Wall</div>
        <div className="menu">
          <a href="#" className="link">
            <div className="title">View List</div>
            <div className="bar"></div>
          </a>
          <a href="#" className="link">
            <div className="title">Create a wall</div>
            <div className="bar"></div>
          </a>
        </div>
      </div>
    </>
  );
}
