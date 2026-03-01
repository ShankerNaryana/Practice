import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './land.css'
{/*import { useState } from "react"
import Home from "./home";
function Login()
{
    const [email,setemail]=useState("");
    const [Pass,setpassword]=useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    function loginin(){
    if(email==="admin" && Pass==="12345")
    {
        setLoggedIn(true)
    }
    else{
        alert("Failed")
    }}
    if(loggedIn){
        <Home/>
    }
    return(
        <>
        <h1>Login Form</h1>
        Username :<input type="text" value={email} onChange={(e)=>setemail(e.target.value)}></input><br/>
        Password :<input type="text" value={Pass} onChange={(e)=>setpassword(e.target.value)}></input>
        <button onClick={loginin}>Login</button>

        </>
    )
}
export default Login */}

function Login() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function loginin() {
    if (email === "admin" && password === "12345") {
      navigate("/home");
    } else {
      alert("Login Failed");
    }
  }
  return (
    <>
    <div className="q">
        <h1>WELCOME KSRM LOGIN PAGE</h1>
      </div>
    <div className="lo">
      <h1>Login Form</h1>
      Username:
      <input
        type="text" value={email} onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Password:
      <input
        type="password" value={password} onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={loginin}>Login</button>
      </div>
    </>
  );
}
export default Login;