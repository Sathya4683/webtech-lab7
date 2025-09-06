// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Timer from "./pages/Timer";
import Thermostat from "./pages/Thermostat";

export default function App() {
  return (
    <Router>
      <div>
        {/* Simple Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/thermostat">Thermostat</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/thermostat" element={<Thermostat />} />
        </Routes>
      </div>
    </Router>
  );
}
