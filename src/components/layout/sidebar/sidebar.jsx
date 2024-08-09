import Nav from "../nav/nav";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Fin Track</h1>
      <div className="sidebar__navList">
        <Nav>Overview</Nav>
        <Nav>Income</Nav>
        <Nav>Spending</Nav>
      </div>
      <div className="sidebar__setting">
        <Nav>Settings</Nav>
      </div>
    </div>
  );
}

export default Sidebar;
