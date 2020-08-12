import React, { useState, useContext } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import UserContext from "../../contexts/UserContext"
import { Link } from "react-router-dom";
import "./NewHeader.css";

const NewHeader = (props) => {

    const [show, setShow] = useState(false);


    const context = useContext(UserContext)

    const nav_class = `header-links ${!show ? "hideHeader" : ""}`;

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
                    <Link to="/bless" className="header-link">Bless</Link>
                    <Link className="header-link" to="/"><h1>Curse&Bless</h1></Link>
                    <Link to="/" className="header-link" onClick={handleLogoutClick}>Logout</Link>
                </nav>
            
            </div>
        )
    }


}

export default NewHeader;


// return (
//     <nav className="nav">
//         <h2><a className="title" href="/">Atlas Chords</a></h2>
//         <div className={nav_class}>
//             <a className="Link" href="/submitNewChord">Submit Chords</a>
//             <a className="Link" href="/">Guitar Chords</a>
//             <a className="Link" href="/" onClick={handleLogOut}>Log Out</a>
//         </div>
//         <div className="icon">
//             <GiHamburgerMenu onClick={(e) => setShow(!show)} />
//         </div>
//     </nav>
// )