import React from 'react';

function CurseCheck(props) {
    const curseSent = props.curseSent;
    const serverMessage = props.serverMessage;
    console.log(serverMessage)
    if (curseSent) {
        
        return (<div>Your curse was sent into the void.</div>)
    }
    else if (serverMessage) {
      
        return (<div>{serverMessage}</div>);
    }
    else {
      return <div></div>
    }
}

export default CurseCheck;
// {curseSent ? <div>Your curse was sent into the void.</div> : ''}
