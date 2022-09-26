import React, {useEffect, useState} from "react";
import Transaction from "./Transaction";

function TransactionsList(){
  
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
     
     
     
    setTransactions(data)
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
       {transactions.map((trans)=>{ 
       return <Transaction 
        key={trans.id}
        date={trans.date} 
        description={trans.description} 
        category={trans.category} 
        amount={trans.amount}
        />})}
             
      </tbody>
    </table>
  );
}

export default TransactionsList;
