import Footer from "./Footer";  
import c from "../images/eeeeng.jpeg"

function EEE(){
    return(
        <>
    <div>
      <h1>Department of Electrical & Electronics Engineering</h1>
      <div className="i"><img src={c} alt="Civil" height={100} width={200}></img></div> 
      <p>
        The Department of Electrical & Electronics Engineering focuses on
        electrical systems, electronics, and power generation and distribution.
        Students learn about circuits, machines, control systems, and renewable
        energy technologies.
      </p>
      <h2>Vision</h2>
      <p>
        To produce competent engineers capable of contributing to electrical
        and electronics technology and research.
      </p>
      <h2>Mission</h2>
      <ul>
        <li>Provide strong fundamentals in electrical and electronics engineering</li>
        <li>Encourage practical learning and laboratory work</li>
        <li>Prepare students for industry, research, and innovation</li>
      </ul>
      <h2>Key Areas</h2>
      <ul>
        <li>Power Systems</li>
        <li>Control Systems</li>
        <li>Embedded Systems</li>
        <li>Electronics & Instrumentation</li>
        <li>Renewable Energy</li>
      </ul>
    </div>
      <Footer/>
        </>
    )
}
export default EEE;