import { Link } from "react-router-dom";
import "./land.css";

import AdminNavbar from "./AdminNavbar";
import AdvisorNavbar from "./AdvisorNavbar";
import UserNavbar from "./Navbar";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <>
      {role === "ADMIN" && <AdminNavbar />}
      {role === "ADVISOR" && <AdvisorNavbar />}
      {role === "USER" && <UserNavbar />}

      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <h3 className="dashboard-subtitle">Welcome to Finance Dashboard</h3>

        <Link to="/AddTransactionForm">
          <button className="dashboard-btn">Add Transaction</button>
        </Link>

        <br /><br />

        <Link to="/Budget">
          <button className="dashboard-btn">Set Budget</button>
        </Link>
      </div>
    </>
  );
}

export default Dashboard;