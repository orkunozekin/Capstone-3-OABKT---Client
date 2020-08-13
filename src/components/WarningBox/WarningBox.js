import React, { useState } from 'react';
import { AiOutlineWarning } from "react-icons/ai";
import './WarningBox.css';

const WarningBox = (props) => {

    const [show, setShow] = useState(false);


    if (!show) {
        return (
            <div className="warning-box">
                <AiOutlineWarning className="warning-box-icon" onMouseOver={() => setShow(true)}/>
            </div>
        )
    }
    
    return (
        <div className="warning-box-wrapper" onMouseLeave={() => setShow(false)}>
            <h3>Warning!</h3>
        </div>
    )
 
}

export default WarningBox;