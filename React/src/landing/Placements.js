import Footer from './Footer.js'
import Place from '../images/companies.jpeg'
function Placements() {
  return (
    <>
    <div className="ho">
        <img src={Place} alt=" " height={500} width={750}></img>
    </div>
    <div>
      <h1 className='d'>Placements</h1>
<p>
        KSRM College of Engineering has a strong placement record with many
        reputed companies visiting the campus every year.
      </p>
      <p>
        The placement cell organizes training programs, mock interviews,
        resume workshops, and industry interaction sessions to prepare students
        for job opportunities.
      </p>
      <h3 className='d'>Recent Placement Highlights</h3>
      <h4>Google</h4>
      <p>Role: Software Engineer</p>
      <p>Package: 30 LPA</p>
      <p>Year: 2024</p>
      <h4>Amazon</h4>
      <p>Role: SDE I</p>
      <p>Package: 28 LPA</p>
      <p>Year: 2024</p>
      <h4>Microsoft</h4>
      <p>Role: Frontend Developer</p>
      <p>Package: 26 LPA</p>
      <p>Year: 2023</p>
      <h4>Infosys</h4>
      <p>Role: Systems Engineer</p>
      <p>Package: 7 LPA</p>
      <p>Year: 2023</p>
      <h4>TCS</h4>
      <p>Role: Software Engineer</p>
      <p>Package: 6.5 LPA</p>
      <p>Year: 2023</p>
      <h3 className='d'>Placement Support Activities</h3>
      <p>
        The placement cell provides training in aptitude, technical skills, and
        soft skills. Students also receive guidance on resume building and
        interview preparation.
      </p>
      <p>
        Alumni mentoring programs help students understand real-world industry
        expectations and career growth opportunities.
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default Placements;
