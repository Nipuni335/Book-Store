import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // active class helper for NavLink (React Router v6)
  const linkClass = ({ isActive }) => (isActive ? "nav-item active" : "nav-item");

  return (
    <header className="nav-wrap">
      <div className="nav-container">

        {/* LEFT LINKS */}
        <nav className={`nav-left ${open ? "open" : ""}`}>
          {/* exact match for root */}
          <NavLink to="/" end className={linkClass}>
            HOME
          </NavLink>

          {/* Add Book - specific route, will be active only on /books/create */}
          <NavLink to="/books/create" className={linkClass}>
            ADD BOOK
          </NavLink>

          {/* ALL BOOKS - exact match so it won't be active on /books/create */}
          <NavLink to="/books" end className={linkClass}>
            ALL BOOKS
          </NavLink>

          <NavLink to="/card" className={linkClass}>
            CARD
          </NavLink>
        </nav>

        {/* CENTER LOGO */}
        <div className="nav-logo">
          <NavLink to="/" end className="logo-link">
            <span className="logo-main">KAVINDYA</span>
            <span className="logo-sub">BOOK STORE</span>
          </NavLink>
        </div>

        {/* RIGHT LINKS */}
        <NavLink to="/login" className="nav-login">
          LOG IN
        </NavLink>

        

        {/* MOBILE MENU BUTTON */}
        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
