import Footer from "./Footer";  
import Ece from "../images/Eceeng.jpeg"
function ECE()
{
    return(
        <>
    <div>
      <h1>Department of Electronics & Communication Engineering</h1>
      <div className="i"><img src={Ece} alt="Aiml" height={100} width={200}></img></div>
      <p>
        The Department of Electronics & Communication Engineering focuses on
        electronic devices, communication systems, signal processing, and
        embedded systems. Students learn to design, analyze, and implement
        modern communication technologies.
      </p>
      <h2>Vision</h2>
      <p>
        To develop skilled engineers capable of contributing to electronics and
        communication technologies.
      </p>
      <h2>Mission</h2>
      <ul>
        <li>Provide strong fundamentals in electronics and communication engineering</li>
        <li>Encourage practical learning and hands-on projects</li>
        <li>Prepare students for industry, research, and innovation</li>
      </ul>
      <h2>Key Areas</h2>
      <ul>
        <li>Communication Systems</li>
        <li>Signal Processing</li>
        <li>Embedded Systems</li>
        <li>VLSI Design</li>
        <li>Microelectronics</li>
      </ul>
    </div>
      <Footer/>
        </>
    )
}
export default ECE;