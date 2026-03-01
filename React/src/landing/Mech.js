import Footer from "./Footer";  
import c from "../images/mecheng.jpg"
function Mech(){
    return(
        <> 
        <div>
      <h1>Department of Mechanical Engineering</h1>
      <div className="i"><img src={c} alt="Civil" height={100} width={200}></img></div> 

      <p>
        The Department of Mechanical Engineering focuses on the design,
        analysis, manufacturing, and maintenance of mechanical systems. Students
        gain knowledge in thermodynamics, robotics, manufacturing, and
        energy systems.
      </p>
      <h2>Vision</h2>
      <p>
        To develop skilled mechanical engineers who innovate and contribute to
        industry and research.
      </p>
      <h2>Mission</h2>
      <ul>
        <li>Provide strong fundamentals in mechanical engineering</li>
        <li>Encourage practical learning, workshops, and projects</li>
        <li>Prepare students for industry, research, and entrepreneurship</li>
      </ul>
      <h2>Key Areas</h2>
      <ul>
        <li>Thermodynamics & Heat Transfer</li>
        <li>Fluid Mechanics</li>
        <li>Robotics & Automation</li>
        <li>Manufacturing & Design</li>
        <li>Energy Systems</li>
      </ul>
    </div>
      <Footer/>
      </>
    )
}
export default Mech;