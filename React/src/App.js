import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./landing/login.jsx";
import Home from "./landing/home";
import Navbar from './landing/nav.js';
import Contact from './landing/contact.js';
import About from './landing/about.js'
import Departments from "./landing/Departments.js"; 
import Placements from './landing/Placements.js'
import Civil from "./landing/Civil.js";
import Mech from "./landing/Mech.js";
import EEE from "./landing/EEE.js";
import ECE from "./landing/ECE.js";
import CSE from "./landing/CSE.js";
import AIML from "./landing/AIML.js";
function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/Departments" element={<><Navbar /><Departments /></>} />
        <Route path="/Placements" element={<><Navbar /><Placements/></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="/Civil" element={<><Navbar/> <Departments/><Civil /></>} />
        <Route path="/Mech" element={<><Navbar/> <Departments/><Mech /></>} />
        <Route path="/EEE" element={<><Navbar/> <Departments/><EEE/></>} />
        <Route path="/ECE" element={<><Navbar/> <Departments/><ECE /></>} />
        <Route path="/CSE" element={<><Navbar/> <Departments/><CSE /></>} />
        <Route path="/AIML" element={<><Navbar/> <Departments/><AIML /></>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

