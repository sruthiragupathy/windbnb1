import React from "react";
import star from "../Assets/star.svg"
import "./Card.css";

const Card = ({hotel}) =>{
    
    return(
        <div className="card">
    
            <img className="card-img" src = {hotel.photo} alt="hotel"></img>
            <div className="card-flex">
                <div>
                {hotel.superHost && <small className="host">SUPER HOST</small>}
                <small class="type">{hotel.type}</small>
                </div>
                <small><img src={star} alt="star" className="star-img"></img>{hotel.rating}</small>
                
            </div>
            <h4>{hotel.title}</h4>
        </div>
    )    
}

export default Card;