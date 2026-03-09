import React from "react";
import { Link } from "react-router-dom";
import "./land.css";

function AdvisorNavbar() {

  function logout() {
    window.location.href = "/";
  }

  return (
    <nav className="navbar">

      <h2 className="navbar-title">FinTrack Advisor</h2>

       <ul className="navbar-menu">
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/AdvisorClient">Clients</Link></li>
        <li><Link to="/AdvisorClientList">Client Summary</Link></li>
        <li className="navbar-logout" onClick={logout}>Logout</li>
      </ul>

    </nav>
  );
}

export default AdvisorNavbar;