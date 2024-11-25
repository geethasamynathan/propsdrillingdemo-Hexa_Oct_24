import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <header>
      <h1> Welcome to MyReact App</h1>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </header>
  );
};

export default Header;
