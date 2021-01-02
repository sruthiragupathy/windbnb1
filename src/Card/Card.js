import React from "react";
import star from "../Assets/star.svg"
import "./Card.css";

const Card = ({hotel}) =>{
    
    return(
        <div className="card">
    
            <img className="card-img" src = {hotel.photo} alt="hotel"></img>
            <div className="card-flex">
                <small>{hotel.type}</small>
                
                <small><img src={star} alt="star" className="star-img"></img>{hotel.rating}</small>
                
            </div>
            <h4>{hotel.title}</h4>
        </div>
    )    
}

export default Card;