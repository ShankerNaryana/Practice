import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './land.css'
function LoginPage()
{ 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function loginin() {
    if (email === "admin" && password === "12345") {
      navigate("/Dashboard");
    } else {
      alert("Login Failed");
    }
  }
    return(
        <>
        <div className="h">
    <div >
        <h1>WELCOME TO LOGIN PAGE</h1>
      </div>
    <div>
      <h1>Login Form</h1>
      Username:<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br /><br/>
      Password:<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br /><br/>
      <button onClick={loginin}>Login</button><br/><br/>
      </div>
      <Link to="/RegisterPage">Register</Link>
    </div>
</>
    )
}
export default LoginPage;