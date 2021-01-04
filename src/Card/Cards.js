import React,{useState,useEffect} from "react";
import Card from "./Card";
import "./Cards.css";
import Loader from 'react-loader-spinner';


const Cards = (props) =>{
    const {stays,place} = props;
    const [hotels,setHotels] = useState([]);
    console.log(place);

    useEffect(()=>{
        function getHotels(){
        const city = place.split(",")[0];
        console.log(city);
        const hot = stays.filter(item=>(item.city === city))
        console.log(hot);
        setHotels(hot);
        }
        setTimeout(getHotels,1500);
    },[place,stays])

    function cards(){
        hotels.map((item,index)=>{
                
            return <Card  key={index} hotel={item}></Card>
        })
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