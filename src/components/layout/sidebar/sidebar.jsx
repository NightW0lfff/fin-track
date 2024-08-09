function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Fin Track</h1>
      <div className="sidebar__navList">
        <div className="sidebar__navList--nav">Overview</div>
        <div className="sidebar__navList--nav">Income</div>
        <div className="sidebar__navList--nav">Spending</div>
      </div>
      <div className="sidebar__setting">
        <div className="sidebar__setting--nav">Setting</div>
      </div>
    </div>
  );
}

export default Sidebar;
