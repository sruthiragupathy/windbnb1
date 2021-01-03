import React,{useState} from "react";
import logo from "../../Assets/logo.svg";
import './Header.css';
const Header = (props) =>{
    
    const {place,fn} = props
    
    const places = ["Helsinki, Finland","Turku, Finland","Oulu, Finland","Vaasa, Finland"];
    const [focus,setFocus] = useState(false);
    const [open,setOpen] = useState({
        location:false,
        guests:false

    });
    function toggleLocation(e){
        setFocus(true);
        setOpen({...open,location:true,guests:false});
        
        
    }

    function toggleGuests(e){
        setFocus(true);
        setOpen({...open,location:false,guests:true});
       
        
    }


    function removeClass(){
        setFocus(false);
    }

    
    let locationClass=["header-input"];
    let guestsClass=["header-input"];
    let buttonClass = ["header-button"];
    let headerClass = ["header-form"]
    let logoClass = ["header-logo"]
    if(focus){
        locationClass.push("input");
        guestsClass.push("input");
        buttonClass.push("btn");
        headerClass.push("full-width");
        logoClass.push("logo-focus");
    }

    if(open.location){
        locationClass.push("input-border");
    }
    if(open.guests){
        guestsClass.push("input-border");

    }
    
    function dropDownHandler(e){
        fn(e.target.innerText);

    }


    return (
        <div class="nav">
        <nav className="header">
        
            <img src={logo} alt="logo" className = {logoClass.join(' ')} ></img>
            <div className={headerClass.join(' ')}>
                <input className = {locationClass.join(' ')} name="location" onClick={toggleLocation} value={place}/>
                <input  className = {guestsClass.join(' ')} name="guests" onClick={toggleGuests} value="Add guests"/>
                <button className={buttonClass.join(' ')}>Go</button>
                
            </div>
            <div className="dropdown">
                    {
                        open.location && (
                        <ul className="location">
                            {places.map((item,index)=>{
                                return <li key={index} onClick={dropDownHandler}>{item}</li>
                            })}
                            
                        </ul>
                        )
                        
                    }
                    {
                        open.guests && (
                            <ul className="guests">
                                <li>Helsinki</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                                <li>Option 4</li>
                            </ul>
                            )
                    }
                     

                </div>
        </nav>
        
        </div>
    )
}

export default Header;