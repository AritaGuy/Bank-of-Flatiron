import React, {useState, useEffect} from "react";

function Search() {
  const [searchTrans, setSearchTrans]=useState([])

  useEffect(()=>{
     fetch("http://localhost:8001/transactions")
     .then((response)=>response.json())
     .then((data)=>{
      setSearchTrans(data)
     })
  }, [])
   
  function handleSearch(event){
    
    const filteredArray = searchTrans.filter((name)=>{
    
    
      return name.description.toLowerCase().includes(event.target.value.toLowerCase())
    })
    console.log(filteredArray)
    return filteredArray
  }
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
