import React from "react";
import "./land.css";

function AdvisorClientListPage() {

  const clients = [
    { id: 1, name: "Hari Haran", email: "hariharan@gmail.com", income: 50000, expense: 32000 },
    { id: 2, name: "Yashwanth", email: "yashwanth@gmail.com", income: 62000, expense: 41000 },
    { id: 3, name: "Dheeraj", email: "dheeraj@gmail.com", income: 45000, expense: 28000 }
  ];

  return (
    <div className="app-bg">
    <div className="page-container">

      <h2 className="page-title">Advisor Client List</h2>

      <div className="table-container">

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Total Income</th>
              <th>Total Expense</th>
            </tr>
          </thead>

          <tbody>

            {clients.map((client)=>(
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td className="income">₹{client.income}</td>
                <td className="expense">₹{client.expense}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
    </div>
  );
}

export default AdvisorClientListPage;