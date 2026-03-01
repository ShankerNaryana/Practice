import Footer from "./Footer";  
import Cse from "../images/CSEeng.jpeg"
function CSE(){
    return(
        <>
    <div>
      <h1>Department of Computer Science & Engineering</h1>
      <div className="i"><img src={Cse} alt="Civil" height={100} width={200}></img></div> 
      <p>
        The Department of Computer Science & Engineering focuses on programming,
        algorithms, data structures, software development, and emerging
        technologies like AI, ML, and cloud computing. Students gain strong
        foundations to build innovative software solutions.
      </p>

      <h2>Vision</h2>
      <p>
        To develop competent computer engineers capable of contributing to
        technology, research, and industry innovation.
      </p>

      <h2>Mission</h2>
      <ul>
        <li>Provide strong fundamentals in computer science and programming</li>
        <li>Encourage hands-on projects and research initiatives</li>
        <li>Prepare students for industry, entrepreneurship, and higher studies</li>
      </ul>
      <h2>Key Areas</h2>
      <ul>
        <li>Algorithms & Data Structures</li>
        <li>Software Development</li>
        <li>Artificial Intelligence & Machine Learning</li>
        <li>Cybersecurity & Networking</li>
        <li>Cloud Computing & Big Data</li>
      </ul>
    </div>
      <Footer/>
      </>
    )
}
export default CSE;