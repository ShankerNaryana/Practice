 import { Link} from "react-router-dom"
 import './land.css'
 function Deptnav()
 {
    return(
        <>
    <div className="u h">
      <Link to="/Civil ">Civil Engineering</Link>
      <Link to="/Mech">Mechanical Engineering</Link>
      <Link to="/EEE">EEE Engineering</Link>
      <Link to="/ECE">ECE Engineering</Link>
      <Link to="/CSE">CSE Engineering</Link>
      <Link to="/AIML">AIML Engineering</Link>
      </div>
      </>
    )
 }
 export default Deptnav;