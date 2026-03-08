import { Link } from "react-router-dom";
import './land.css'
function RegisterPage()
{
    return(
        <>
        <div className="h">
            <h1>
            Register Page
        </h1>
        Enter UserName:<input type="text" id="rusername" placeholder="Enter A new username"></input>
        <br/><br/>
        Enter Password:<input type="password" id="rusername" placeholder="Enter A new Password"></input>
        <br/><br/><Link to="/">
        <button>Register</button>
        </Link>
        </div>
        
        </>
    )
}
export default RegisterPage;