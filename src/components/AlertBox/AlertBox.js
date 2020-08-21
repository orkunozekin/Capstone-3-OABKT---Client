import React from 'react';
import './AlertBox.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

const AlertBox = (props) => {


    return (
        <>
            <div className='alertWrapper'>
                <div className="alert-box">
                    <div className='alertMessage'>{props.message}</div>
                    {TokenService.hasAuthToken() ? <Link to='/dashboard' ><Button className='alertButton back-to-dashboard'>Back to Dashboard</Button></Link> : ''}
                    <Button className='alertButton curseAgainButton' onClick={() => props.function()}>{props.link}</Button>
                </div>
            </div>
        </>
    );
};

export default AlertBox;



//on curse page, we want a box with two buttons: back to dashboards, and curse more. 
//on bless page, we want a box with two buttons: back to dashboard, and more curse to bless.