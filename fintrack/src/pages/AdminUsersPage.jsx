import React from "react";
import "./land.css";

function AdminUsersPage(){

  const users = [
    {name:"Hari Haran",role:"USER",transactions:25},
    {name:"Yashwanth",role:"USER",transactions:18},
    {name:"Dheeraj",role:"ADVISOR",transactions:0}
  ];

  return(
<div className="app-bg">
    <div className="page-container">

      <h2 className="page-title">Registered Users</h2>

      <div className="table-container">

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Total Transactions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user,i)=>(
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.transactions}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
</div>
    </div>
  );
}

export default AdminUsersPage;