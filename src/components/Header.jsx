import React from "react";
const Header = ({ userEmail, onLogout }) => (
  <header className="header">
    <div className="logo">💬 Matchkin</div>
    <div className="header-right">
      {userEmail && <span className="user-email">{userEmail}</span>}
      {userEmail && <button className="logout-btn" onClick={onLogout}>Logout</button>}
    </div>
  </header>
);
export default Header;
