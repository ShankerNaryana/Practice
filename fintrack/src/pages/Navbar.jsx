import { Link } from "react-router-dom";
import "./land.css";

function UserNavbar() {

  function logout() {
    window.location.href = "/";
  }

  return (
  <nav className="navbar">

  <h2 className="navbar-title">FinTrack User</h2>

  <ul className="navbar-menu">
    <li><Link to="/Dashboard">Dashboard</Link></li>
    <li><Link to="/AddTransactionForm">Add Transaction</Link></li>
    <li><Link to="/Budget">Budget</Link></li>
    <li><Link to="/Summary">Summary</Link></li>
    <li className="navbar-logout" onClick={logout}>Logout</li>
  </ul>

</nav>
  );
}

export default UserNavbar;