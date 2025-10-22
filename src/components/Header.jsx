import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/Context";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-games">All Games</NavLink>
      </li>
    </>
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-start">
          <Link to="/" className="logo">
            Gamehub
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="profile-dropdown">
              <label tabIndex={0} className="profile-avatar">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/L1b1sds/default-avatar-profile-icon-vector-social-media-user-photo-183-0.jpg"
                  }
                  alt="User"
                />
              </label>
              <ul tabIndex={0} className="dropdown-content">
                <li>
                  <Link to="/my-profile">My Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
