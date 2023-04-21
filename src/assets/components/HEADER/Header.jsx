import React from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";



const Header = () => {
  const { user, logOut } = useContext(authContext)
  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="items">
        <Link to="/">Shop</Link>
        <Link to="/Orders">Orders</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">Sign Up</Link>
        {
          user &&

          <div>
            <span>{user.email}</span>
            <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
          </div>

        }

      </div>
    </nav>
  );
};

export default Header;
