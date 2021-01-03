import React , {useState,useEffect} from "react";

import './App.css';
import Header from "./Components/Header/Header";
import Stay from "./Stay/Stay";
import Cards from "./Card/Cards";

function App() {
  const [data,setData] = useState([]);
  const [place,setPlace] = useState('Helsinki, Finland');
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
    
    })
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="App">
      
      <Header place={place} fn={(value)=>setPlace(value)}/>
      <Stay/>
      <Cards stays={data} place={place}/>
    </div>
  );
}

export default App;
