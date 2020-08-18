import React from 'react';
import './AlertBox.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

const AlertBox = (props) => {


    return (
        <div className="alert-box">
            <div>{props.message}</div>
            {TokenService.hasAuthToken() ? <Link to='/dashboard' ><Button>Back to Dashboard</Button></Link> : ''}
            <Button onClick={() => props.function()}>{props.link}</Button>
        </div>
    )
}

export default AlertBox;



//on curse page, we want a box with two buttons: back to dashboards, and curse more. 
//on bless page, we want a box with two buttons: back to dashboard, and more curse to bless.