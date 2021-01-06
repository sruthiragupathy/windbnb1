import React,{useState,useEffect} from "react";
import Card from "./Card";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Cards.css";

const Cards = (props) =>{
    const {stays,place,gCount} = props;
    const [hotels,setHotels] = useState([]);
    

    function getHotels(){
        
       
    const city = place.split(",")[0];
   
    const hot = stays.filter(item=>(item.city === city && item.maxGuests>=gCount))
    
    setHotels(hot);
    }

    useEffect(()=>{
        hotels.length=0;
        setTimeout(getHotels,1500);
    },[place,stays,gCount])

    if(hotels.length===0){
        return  <div className="loader">
            <CircularProgress/>
        </div>
    }
    
    return(
        <div className="hotel-card">
        {
            
            hotels.map((item,index)=>{
                
                return <Card  key={index} hotel={item}></Card>
            })
        }
        </div>
    )
}

export default Cards;