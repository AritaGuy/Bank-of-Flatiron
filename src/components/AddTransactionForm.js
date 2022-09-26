import React, {useState, useEffect} from "react";

function AddTransactionForm() {
 const[addTrans, setAddTrans]=useState({})
 function handleSubmit(){
  
    fetch('http://localhost:8001/transactions', {
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(addTrans)
    })
  

  }
  
 
  function handleChange(event){
    setAddTrans({...addTrans, 
    [event.target.name]:event.target.value})
    console.log(event.target.value)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
