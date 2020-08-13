import React from 'react';
import './CurseRoute.css';
import AlertBox from '../../components/AlertBox/AlertBox';

function CurseCheck(props) {
    const curseSent = props.curseSent;
    const serverMessage = props.serverMessage;
    console.log(serverMessage)
   

    if (curseSent || !props.alertBox) {
        return <AlertBox function={props.handleCurseAgain} link={'Curse Again'} message={'Your curse was sent into the void.'}/>
    }

    else if (serverMessage && !props.alertBox) {
      return <AlertBox endpoint={'/curse'} link={'Curse Again'} message={serverMessage} />
    }
        
    else {
      return <div></div>
    }
}

export default CurseCheck;

