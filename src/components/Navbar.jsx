import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
          <div className="login-register" onClick={closeCollapse}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
