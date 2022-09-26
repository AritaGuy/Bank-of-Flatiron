import React, {useEffect, useState} from "react";
import Transaction from "./Transaction";

function TransactionsList(details){
  
  const [transactions, setTransactions] = useState([{
    date:"",
    description:"",
    category:"",
    amount: 0,
  }])

  useEffect(()=>{
    fetch ('http://localhost:8001/transactions')
    .then((response)=>response.json())
    .then((data)=>{
     let i
     
    for (i of data) 
    {setTransactions(
      {
        date:i.date,
        description:i.description,
        category:i.category,
        amount:i.amount
       })}   
    }, 
   )}, [])

  console.log(transactions)
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
       
        <Transaction 
        key={transactions.id}
        date={transactions.date} 
        description={transactions.description} 
        category={transactions.category} 
        amount={transactions.amount}
        />
       
        
        
      </tbody>
    </table>
  );
}

export default TransactionsList;
