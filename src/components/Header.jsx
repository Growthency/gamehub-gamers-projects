import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/Context";
import logo from "/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-games" onClick={() => setIsMenuOpen(false)}>
          All Games
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-start">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="navbar-center-desktop">
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
                      : "https://avatars.githubusercontent.com/u/143309391?v=4"
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

          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hamburger-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hamburger-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links-mobile">{navLinks}</ul>
      </div>
    </header>
  );
};

export default Header;
