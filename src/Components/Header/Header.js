import React,{useState} from "react";
import logo from "../../Assets/logo.svg";
import search from "../../Assets/search.svg";
import close from "../../Assets/close.svg";


import './Header.css';
const Header = (props) =>{
    
    const {place,fn,color} = props
    
    const places = ["Helsinki, Finland","Turku, Finland","Oulu, Finland","Vaasa, Finland"];
    const [focus,setFocus] = useState(false);
    const [open,setOpen] = useState({
        location:false,
        guests:false

    });

    const [count,setCount] = useState({
        adult:0,
        child:0
    }) 
    
    function toggleLocation(e){
        setFocus(true);
        // setTimeout(
        //     function(){color(true)}
        //     ,800);
        color(true);
        setOpen({...open,location:true,guests:false});
        
        
    }

    function removeToggleLocation(){
        setFocus(false);
        color(false);
        setOpen({...open,location:false});

    }

    function toggleGuests(e){
        setFocus(true);
        setOpen({...open,location:false,guests:true});
       
        
    }

    function addCounter(e){
        console.log("hi");
        // setCount({...count,name:count[name]+1})
    }


    

    
    let locationClass=["header-input"];
    let guestsClass=["header-input"];
    let buttonClass = ["header-button"];
    let headerClass = ["header-form"]
    let logoClass = ["header-logo"]
    let dropDownClass = ["dropdown"]
    if(focus){
        locationClass.push("input");
        guestsClass.push("input");
        buttonClass.push("btn");
        headerClass.push("full-width");
        logoClass.push("logo-focus");
        dropDownClass.push("dropdown-visible");

        
    }

    if(open.location){
        locationClass.push("input-border");
    }
    if(open.guests){
        guestsClass.push("input-border");

    }
    
    function dropDownHandler(e){
        fn(e.target.innerText);
        console.log(e.target.innerText);
        
        headerClass.push("reverse");
        setTimeout(removeToggleLocation,600);


    }


    return (
        <div class="nav">
        <nav className = "header">
        
            <img src={logo} alt="logo" className = {logoClass.join(' ')} ></img>
            <div className={headerClass.join(' ')}>
                <input className = {locationClass.join(' ')} name="location" onFocus={toggleLocation}  value={place}/>
                <input  className = {guestsClass.join(' ')} name="guests" onFocus={toggleGuests} value="Add guests"/>
                {/* <button className={buttonClass.join(' ')}>Go</button> */}
                
            </div>
            <div className={dropDownClass.join(' ')}>
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
                            <div className="guest-div">
                            <ul className="guests">
                                <li>
                                    <p className="person"><span>Adults</span><span>Ages from 13</span></p>
                                    <p className="counter">
                                        <button>-</button>
                                        <span>{count.adult}</span>
                                        <button name="adult" onClick = {addCounter} >+</button>
                                    </p>
                                </li>
                                <li>
                                    <p className="person"><span>Children</span><span>Ages 2 - 12</span></p>
                                    <p className="counter">
                                        <button>-</button>
                                        <span>{count.child}</span>
                                        <button>+</button>
                                    </p>
                                </li>
                                
                            </ul>
                            <img src={close}></img>
                            </div>
                            )
                    }
                     

                </div>
        </nav>
        
        </div>
    )
}

export default Header;