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
   
  function handleSearch(e){
    let hawayu = e.target.value
    const filteredArray = searchTrans.filter((name)=>{
      console.log(hawayu)
    
      return name.description === hawayu
    })
    console.log(filteredArray)
    return filteredArray
  }
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        name="text"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
