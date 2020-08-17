import React, { useState, useContext } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UserContext from "../../contexts/UserContext"
import { Link } from "react-router-dom";
import "./NewHeader.css";
import TokenService from "../../services/token-service";

const NewHeader = (props) => {

    const [show, setShow] = useState(false);


    const context = useContext(UserContext); 


    function handleLogoutClick() {
        context.processLogout();
        props.toggleLoggedIn();
    }


    if (!show) {
        return (
            <div className="arrow-wrapper"><TiArrowSortedDown onMouseOver={() => setShow(true)} className="arrow" /></div>
        )
    }

    else {
        return (
            <div onMouseLeave={() => setShow(false)} className="navbar-wrapper">
                <nav className="header-links">
                    {/* <Link className="header-link" to='/dashboard'>{context.user.name}</Link> */}
                    {TokenService.hasAuthToken() ? <>
                        <div>{context.user.name}</div>
                        <Link className="header-link" to="/dashboard"><h1>Curse&Bless</h1></Link>
                        <Link to="/" className="header-link" onClick={handleLogoutClick}>Logout</Link>
                    </> : <>
                        <Link className="header-link" to='/register'>Sign Up</Link>
                        <Link className="header-link" to="/"><h1>Curse&Bless</h1></Link>
                        <Link to="login" className="header-link" >Login</Link>
                        </>} 
                </nav>
                {/* <div className="transparent-div"></div> */}
            </div>
        )
    }


}

export default NewHeader;

