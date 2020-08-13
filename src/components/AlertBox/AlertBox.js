import React from 'react';
import './AlertBox.css';

const AlertBox = (props) => {


    return (
        <div className="alert-box">
           <div>Your have blessed this curse :{props.curse}</div> 
        </div>
    )
}

export default AlertBox;