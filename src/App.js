import React , {useState,useEffect} from "react";

import './App.css';
import Header from "./Components/Header/Header";
import Stay from "./Stay/Stay";
import Cards from "./Card/Cards";
import Box from '@material-ui/core/Box';

function App() {
  const [data,setData] = useState([]);
  const [place,setPlace] = useState('Helsinki, Finland');
  const [color,setColor] = useState(false);
  const [guestCount,setGuestCount] = useState(0);
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
    // console.log(data);
    noscroll();
  },[color])

  function noscroll(){
    if(color){
      document.body.style.overflow= "hidden";
      // console.log(color);
   }
   else{
    document.body.style.overflow= "scroll";

   }
  }

  
  
  return (
    
    <Box className="App">
      {console.log(guestCount)}
      {color &&  <div className="overlay fade-in"></div> }
      
      <Header place={place} fn={(value)=>setPlace(value)} color={(value)=>setColor(value)} gCount={(value)=>setGuestCount(value)} />
      <Stay/>
      <Cards stays={data} place={place} gCount={guestCount}/>
      
    </Box>
    
  );
}

export default App;
