import React, { useState, useContext } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UserContext from "../../contexts/UserContext"
import { Link } from "react-router-dom";
import "./NewHeader.css";
import TokenService from "../../services/token-service";

const NewHeader = (props) => {

    const [show, setShow] = useState(false);


    const context = useContext(UserContext)


    function handleLogoutClick() {
        context.processLogout()
        props.toggleLoggedIn();
    }


    if (!show) {
        return (
            <div className="arrow-wrapper"><TiArrowSortedDown onMouseOver={() => setShow(true)} className="arrow" /></div>
        )
    }

    else {
        return (
            <div onMouseLeave={() => setShow(false)} className="">
                <nav className="header-links">
                    <Link className="header-link" to='/dashboard'>{context.user.name}</Link>
                    <Link to="/bless" className="header-link">Bless</Link>
                    <Link className="header-link" to="/"><h1>Curse&Bless</h1></Link>
                  {TokenService.hasAuthToken() ? <Link to="/" className="header-link" onClick={handleLogoutClick}>Logout</Link> : <Link to="login" className="header-link" >Login</Link>}  
                </nav>
            
            </div>
        )
    }


}

export default NewHeader;

