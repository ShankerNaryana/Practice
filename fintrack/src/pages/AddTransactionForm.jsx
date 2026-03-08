function AddTransactionForm(){

 return(
  <div className="h">
   <h2>Add Transaction</h2>
   Amount:<input type="number"/><br/><br/>
   Description:<input type="text" /><br/><br/>
   Category:<input type="text" /><br/><br/>
   Date:<input type="text" /><br/><br/>
   <button>Add Transaction</button>
  </div>
 )
}

export default AddTransactionForm;