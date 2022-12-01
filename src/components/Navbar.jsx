import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const handleCollapse = () => setCollapsed(!isCollapsed);
  const closeCollapse = () => setCollapsed(false);

  return (
    <>
      <div className="top-navbar fixed-top navbar-dark bg-dark">
        <div
          className="topbar-container container d-flex justify-content-between"
          onClick={closeCollapse}
        >
          <div className="logo-container">
            <Link to="/" className="logo">
              <img
                src="https://res.cloudinary.com/hapiii/image/upload/v1650202719/logos/hwaomthmegmqe5rwst6q.png"
                alt="logo"
              />
              <span>Tv-Maze</span>
            </Link>
          </div>
          <div className="login-register">
            <Login />
            <Register />
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container d-flex align-content-between position-relative">
          <button
            className="navbar-toggler navbar-toggler-icon"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleCollapse}
          ></button>

          <div
            onClick={handleCollapse}
            id="navbarSupportedContent"
            className={`${isCollapsed ? "" : "collapse"}  navbar-collapse`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/favorites" className="nav-link">
                  Favorites
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="login-register" onClick={closeCollapse}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
