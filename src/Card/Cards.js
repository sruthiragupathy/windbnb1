import React,{useState,useEffect} from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = (props) =>{
    const {stays,place} = props;
    const [hotels,setHotels] = useState([]);
    console.log(place);

    useEffect(()=>{
        const city = place.split(",")[0];
        console.log(city);
        const hot = stays.filter(item=>(item.city === city))
        setHotels(hot);
    },[place])
    
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