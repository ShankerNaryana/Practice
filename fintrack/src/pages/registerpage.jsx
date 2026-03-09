import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./land.css";
import RegisterPae from "../images/Registerpage.png";
function RegisterPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  function registerUser() {

    if (email !== "" && password !== "" && role !== "") {

      localStorage.setItem("regEmail", email);
      localStorage.setItem("regPassword", password);
      localStorage.setItem("regRole", role);

      alert("Registration Successful");

      navigate("/");

    } else {
      alert("Please fill all fields");
    }

  }

  return (
    <div className="bg-page">
      <img src={RegisterPae} alt="Register Background" className="bg-image" />
      
    <div className="b">
    <div className="login-container">
        <h1>FINTRACKER</h1>
      <h1>WELCOME TO REGISTER PAGE</h1>

      <div className="login-box">

        <h2>Register Form</h2>

        <label>Email</label>
        <input
          type="text"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <label>Password</label>
        <input
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <label>Role</label>
        <select onChange={(e)=>setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="USER">User</option>
          <option value="ADVISOR">Advisor</option>
          <option value="ADMIN">Admin</option>
        </select>

        <br/><br/>

        <button onClick={registerUser}>Register</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default RegisterPage;