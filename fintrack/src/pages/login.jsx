import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./land.css";
import Loginimg from "../images/loginimg.png"

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  function loginin() {

    if (email === "" || password === "" || role === "") {
      alert("Please fill all fields");
      return;
    }

    const storedEmail = localStorage.getItem("regEmail");
    const storedPassword = localStorage.getItem("regPassword");
    const storedRole = localStorage.getItem("regRole");

    if (!storedEmail) {
      alert("Please register first");
      navigate("/RegisterPage");
      return;
    }

    if (email === storedEmail && password === storedPassword && role === storedRole) {

      localStorage.setItem("role", role);
      alert("Login Successful");
      navigate("/Dashboard");

    } else {
      alert("Invalid login details");
    }
  }

  return (
    <div className="bg-page">
      <img src={Loginimg} alt="login background" className="bg-image" />
    <div className="l">
    <div className="login-container">
      <h1>FINTRACKER</h1>
      <h1>WELCOME TO LOGIN PAGE</h1>
      <div className="login-box">

        <h2>Login Form</h2>

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="USER">User</option>
          <option value="ADVISOR">Advisor</option>
          <option value="ADMIN">Admin</option>
        </select>

        <br /><br />

        <button onClick={loginin}>Login</button>

        <p>
          Don't have an account? <Link to="/RegisterPage">Register</Link>
        </p>

      </div>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;