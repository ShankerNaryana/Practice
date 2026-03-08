function BudgetPage(){
 return(
  <div className="h">
   <h2>Set Budget</h2>
   Category:<input type="text" />
   <br/><br/>
   Budget Amount:<input type="number" />
   <br/><br/>
   Month:<input type="text" />
   <br/><br/>
   Year:<input type="number" />
   <br/><br/>
   <button>Save Budget</button>
  </div>
 )
}
export default BudgetPage;