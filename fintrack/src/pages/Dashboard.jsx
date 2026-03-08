import { Link } from "react-router-dom";

function Dashboard(){
 return(
  <div className="h">
   <h1>Dashboard</h1>
   <h3>Welcome to Finance Dashboard</h3>
   <br/>
   <Link to="/AddtransactionForm">
    <button>Add Transaction</button>
   </Link>
   <br/><br/>
   <Link to="/budget">
    <button>Set Budget</button>
   </Link>
   <br/><br/>
  </div>
 )
}

export default Dashboard;