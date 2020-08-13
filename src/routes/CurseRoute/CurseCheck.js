import React from 'react';
import './CurseRoute.css';

function CurseCheck(props) {
    const curseSent = props.curseSent;
    const serverMessage = props.serverMessage;
    console.log(serverMessage)
    if (curseSent) {
        
        return (<div className="curse-sent-box">Your curse was sent into the void.</div>)
    }
    else if (serverMessage) {
      
        return (<div className="curse-sent-box">{serverMessage}</div>);
    }
    else {
      return <div></div>
    }
}

export default CurseCheck;
// {curseSent ? <div>Your curse was sent into the void.</div> : ''}
