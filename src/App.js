import React , {useState,useEffect} from "react";

import './App.css';
import Header from "./Components/Header/Header";
import Stay from "./Stay/Stay";
import Cards from "./Card/Cards";

function App() {
  const [data,setData] = useState([]);
  const getData=()=>{
    fetch('stays.json',{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(function(response){
      
      return response.json();
    })
    .then(json=>{
      
      setData(json);
      console.log("json",json,typeof(json))
    })
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      <Header/>
      <Stay/>
      <Cards stays={data}/>
    </div>
  );
}

export default App;
