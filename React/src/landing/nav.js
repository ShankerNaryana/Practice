 import { Link} from "react-router-dom";
 import './land.css'; 


function Navbar() {
  return (
    <nav>
      <div className="q">
        <h1>KSRM</h1>
      </div>
    <div className="u h">
      <Link to="/home">Home</Link>
      <Link to="/Departments">Department</Link>
      <Link to="/Placements">Placements</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      
      <div className="b">
        <Link to="/">
            <button>Logout</button>
        </Link>
      </div>
      </div>
      

    </nav>
  );
}

export default Navbar;

//import { useState } from "react"
{/* function Navbar()
{
    //let [islogin,setLogin]=useState("")

 return(
    <>
    {/*{islogin? <nav>
        <ul>
            <li>Home</li> 
            <li>Contact</li>
            <li>About</li>
            <button onClick={()=>setLogin(false)} className="b">Logout</button>
        </ul>
    </nav>:<button onClick={()=>setLogin(true)} className="b">Login</button>
}
    <ul>
        <li>Home</li> 
        <li>Contact</li>
        <li>About</li>
    </ul>
    </>
 )   
}
export default Navbar*/}