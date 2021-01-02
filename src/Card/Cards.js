import React from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = (props) =>{
    const {stays} = props;
    console.log(Array.isArray(stays));
    return(
        <div className="hotel-card">
        {
            stays.map((item,index)=>{
                
                return <Card  key={index} hotel={item}></Card>
            })
        }
        </div>
    )
}

export default Cards;