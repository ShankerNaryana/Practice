import Footer from "./Footer"; 
import Aiml from "../images/Aimleng.jpeg" 
function AIMLDepartment() {
  return (
    <>
    <div>
      <h1>Department of Artificial Intelligence & Machine Learning</h1>
      <div className="i"><img src={Aiml} alt="Aiml" height={100} width={200}></img></div>
      <p>
        The Department of Artificial Intelligence and Machine Learning (AIML)
        focuses on teaching core concepts of AI, ML, and Data Science. The
        department prepares students to solve real-world problems using
        intelligent systems.
      </p>
      <h2>Vision</h2>
      <p>
        To develop skilled professionals and researchers in Artificial
        Intelligence and Machine Learning.
      </p>
      <h2>Mission</h2>
      <ul>
        <li>Provide strong fundamentals in AI and ML</li>
        <li>Encourage innovation and research</li>
        <li>Prepare students for industry and higher studies</li>
      </ul>
      <h2>Key Areas</h2>
      <ul>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Data Science</li>
        <li>Artificial Intelligence</li>
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default AIMLDepartment;
