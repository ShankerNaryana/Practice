import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Loginpage from "./pages/login";
import RegisterPage from "./pages/registerpage";
import AddTransactionForm from "./pages/AddTransactionForm";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdvisorClientListPage from "./pages/AdvisorClientPageList";
import AdvisorClientPage from "./pages/AdvisoClientPage";
import AdvisorNavbar from "./pages/AdvisorNavbar";
import AdminNavbar from "./pages/AdminNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/RegisterPage" element={<RegisterPage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/AddTransactionForm" element={<AddTransactionForm/>}/>
        <Route path="/Budget" element={<Budget/>} />
        <Route path="/AdvisorClient" element={<><AdvisorNavbar/><AdvisorClientPage/></>} />
        <Route path="/AdvisorClientList" element={<><AdvisorNavbar/><AdvisorClientListPage/></>}/>
        <Route path="/AdminCategories" element={<><AdminNavbar/><AdminCategoriesPage/></>} />
        <Route path="/AdminUsers" element={<><AdminNavbar/><AdminUsersPage/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;