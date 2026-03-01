import Footer from "./Footer";  
import c from "../images/civileng.jpeg"
function Civil()
{
    return(
        <>
        <div>
      <h1>Department of Civil Engineering</h1>
      <div className="i"><img src={c} alt="Civil" height={100} width={200}></img></div> 
      <p>
        The Department of Civil Engineering focuses on planning, designing,
        constructing, and maintaining infrastructure such as buildings, roads,
        bridges, and water resources. The department emphasizes practical
        knowledge along with strong theoretical foundations.
      </p>
      <h2>Vision</h2>
      <p>
        To produce competent civil engineers who contribute to sustainable
        infrastructure development.
      </p>
      <h2>Mission</h2>
      <ul>
        <li>Provide strong fundamentals in civil engineering concepts</li>
        <li>Encourage practical learning and field exposure</li>
        <li>Promote ethical and professional engineering practices</li>
      </ul>
      <h2>Key Areas</h2>
      <ul>
        <li>Structural Engineering</li>
        <li>Geotechnical Engineering</li>
        <li>Transportation Engineering</li>
        <li>Environmental Engineering</li>
        <li>Water Resources Engineering</li>
      </ul>
    </div>
      <Footer/>
      </>
    )
}
export default Civil;