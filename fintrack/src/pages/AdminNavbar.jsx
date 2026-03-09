import { Link } from "react-router-dom";
import "./land.css";

function AdminNavbar() {

  function logout() {
    window.location.href = "/";
  }

  return (
    <nav className="navbar">

  <h2 className="navbar-title">FinTrack Admin</h2>

  <ul className="navbar-menu">
    <li><Link to="/Dashboard">Dashboard</Link></li>
    <li><Link to="/AdminUsers">Users</Link></li>
    <li><Link to="/AdminCategories">Categories</Link></li>
    <li className="navbar-logout" onClick={logout}>Logout</li>
  </ul>

</nav>
  );
}

export default AdminNavbar;