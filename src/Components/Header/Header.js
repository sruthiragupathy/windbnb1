import React from "react";
import logo from "../../Assets/logo.svg";
import searchIcon from "../../Assets/search.svg";
import './Header.css';
const Header = () =>{
    return (
        <nav className="header">
            <img src={logo} alt="logo" className = "header-logo"></img>
            <div className="header-form">
                <input className = "header-input" value="Helsinki, Finland"/>
                <input  className = "header-input" value="Add guests"/>
                <button className="header-button">Go</button>
            </div>
            
        </nav>
    )
}

export default Header;