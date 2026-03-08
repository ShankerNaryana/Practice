import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Loginpage from './pages/login';
import RegisterPage from "./pages/registerpage";
import AddTransactionForm from "./pages/AddTransactionForm";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/AddTransactionForm" element={<AddTransactionForm/>} />
        <Route path="/Budget" element={<Budget/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
