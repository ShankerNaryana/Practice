import React, {useState} from "react";
import "./land.css";

function AdminCategoriesPage(){

  const [name,setName] = useState("");
  const [type,setType] = useState("");
  const [categories,setCategories] = useState([]);

  function addCategory(){

    if(name === "" || type === ""){
      alert("Enter category details");
      return;
    }

    const newCategory = {name,type};

    setCategories([...categories,newCategory]);

    setName("");
    setType("");
  }

  return(
<div className="app-bg">
    <div className="page-container">

      <h2 className="page-title">Category Management</h2>

      <div className="form-container">

        <div className="form-group">
          <input
            className="input-field"
            placeholder="Category Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <select
            className="input-field"
            value={type}
            onChange={(e)=>setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="INCOME">Income</option>
            <option value="EXPENSE">Expense</option>
          </select>
        </div>

        <button className="btn" onClick={addCategory}>Add Category</button>

      </div>

      <div className="table-container">

        <h3>All Categories</h3>

        <table className="table">

          <thead>
            <tr>
              <th>Category Name</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>

            {categories.map((cat,i)=>(
              <tr key={i}>
                <td>{cat.name}</td>
                <td>{cat.type}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
    </div>
  );
}

export default AdminCategoriesPage;