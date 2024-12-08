import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css"; // Import the styles

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
