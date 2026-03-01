import './land.css'
import Footer from './Footer.js'
import CollegeImg from '../images/College.jpeg';
function Home()
{ 
    return(
        <>
        <div className="ho">
        <img src={CollegeImg} alt="Home" height={500} width={800}></img>
        <p>Welcome To </p>
        <h1>KSRM College of Engineering</h1>
        <p>Autonomous | Affiliated to JNTUA | Kadapa</p>
        </div>
        <h2>Shaping Future Engineers</h2>
        <p>
          KSRM College of Engineering is committed to academic excellence,
          innovation, and holistic development.
        </p>
        <div className='k'>
        <h2>Our Mission</h2>
      <ul>
        <li>Provide quality technical education</li>
        <li>Encourage research and innovation</li>
        <li>Develop industry-ready professionals</li>
      </ul>
      <div className='kl'>
      <h2>College Highlights</h2>
      <ul>
        <li>Experienced Faculty</li>
        <li>Modern Laboratories</li>
        <li>Excellent Placements</li>
        <li>Green & Clean Campus</li>
      </ul>
      </div>
      </div>
      <Footer/>
    </>
    );
}
export default Home;