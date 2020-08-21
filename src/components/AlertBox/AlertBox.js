import React from 'react';
import './AlertBox.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

const AlertBox = (props) => {
    let buttonReturn = 'alertButton back-to-dashboard';
    let buttonAgain = 'alertButton curseAgainButton';
    if (props.flag === 'blessy') {
        buttonReturn += ' blessy-back-to-dashboard';
        buttonAgain += ' bless-again-button';
    }

    return (
        <>
            <div className={props.flag === 'blessy' ? 'alertWrapper blessy-background' : 'alertWrapper'}>
                <div className={props.flag === 'blessy' ? 'alert-box blessy-form' : 'alert-box'}>
                    <div className='alertMessage'>{props.message}</div>
                    {TokenService.hasAuthToken() ? <Link to='/dashboard' ><Button className={buttonReturn}>Back to Dashboard</Button></Link> : ''}
                    <Button className={buttonAgain} onClick={() => props.function()}>{props.link}</Button>
                </div>
            </div>
        </>
    )
}

export default AlertBox;



//on curse page, we want a box with two buttons: back to dashboards, and curse more. 
//on bless page, we want a box with two buttons: back to dashboard, and more curse to bless.