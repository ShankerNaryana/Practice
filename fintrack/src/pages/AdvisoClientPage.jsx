import React, { useState } from "react";
import "./land.css";

function AdvisorClientPage() {

  const clients = ["Hari Haran","Yashwanth","Dheeraj"];
  const [client,setClient] = useState("");

  const summary = {
    income: 50000,
    expense: 32000,
    categories:[
      {name:"Food",amount:8000},
      {name:"Rent",amount:12000},
      {name:"Transport",amount:3000}
    ]
  };

  return (
    <div className="app-bg">
    <div className="page-container">

      <h2 className="page-title">Client Financial Summary</h2>

      <select
        className="client-select"
        onChange={(e)=>setClient(e.target.value)}
      >
        <option>Select Client</option>
        {clients.map((c,i)=>(
          <option key={i}>{c}</option>
        ))}
      </select>

      {client && (

        <div className="summary-section">

          <h3 className="client-name">{client}</h3>

          <div className="summary-cards">

            <div className="card income-card">
              <h4>Total Income</h4>
              <p>₹{summary.income}</p>
            </div>

            <div className="card expense-card">
              <h4>Total Expense</h4>
              <p>₹{summary.expense}</p>
            </div>

          </div>

          <div className="table-container">

            <h4>Category Breakdown</h4>

            <table className="table">

              <thead>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                {summary.categories.map((cat,i)=>(
                  <tr key={i}>
                    <td>{cat.name}</td>
                    <td>₹{cat.amount}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      )}

    </div>
    </div>
  );
}

export default AdvisorClientPage;