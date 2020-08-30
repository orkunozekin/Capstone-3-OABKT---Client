import React, { useState, useContext } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UserContext from "../../contexts/UserContext";
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
            <div className="arrow-wrapper"><TiArrowSortedDown onMouseOver={() => setShow(true)} className="arrow-down" /></div>
        );
    }

    else {
        return (
            <div onMouseLeave={() => setShow(false)} className="navbar-wrapper">
                <nav className="header-links">
                    {props.loggedIn ? <>
                        <div className="header-link user-name">{props.name}</div>
                        <Link className="header-link" to="/dashboard"><h1>Cursr</h1></Link>
                        <Link to="/" className="header-link" onClick={handleLogoutClick}><h2>Logout</h2></Link>
                    </> : <>
                            <Link className="header-link" to='/register'><h2>Sign Up</h2></Link>
                            <Link className="header-link" to="/"><h1>Cursr</h1></Link>
                            <Link to="login" className="header-link" ><h2>Login</h2></Link>
                        </>}
                </nav>
                <div className="arrow-wrapper"><TiArrowSortedUp onClick={() => setShow(false)} className="arrow-up" /></div>
                {/* <div className="transparent-div"></div> */}
            </div>
        );
    }


};

export default NewHeader;

