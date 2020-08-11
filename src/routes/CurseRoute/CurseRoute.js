import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import CurseForm from '../../components/CurseForm/CurseForm';
import './CurseRoute.css';

class CurseRoute extends Component {

    state = {
       curseSent: false
   }

    handlePostCurses = (ev) => {
        ev.preventDefault()
        const { curseInput } = ev.target;
        let curse = curseInput.value;
        fetch(`${config.API_ENDPOINT}/curses`, {
          method: 'POST',
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
            'content-type': 'application/json'
          },
          body: JSON.stringify({ 
            curse
          })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(json => {
                // alert(`${json.message}`)
                this.setState({curseSent: true})
                curseInput.value = '';
            })
    }

    render() {
        const curseSent = this.state.curseSent;


        return (
            <div className='curse-bless-field'>
                <h2 className='curse-bless-title'>Perform a Curse</h2>
                {TokenService.hasAuthToken() ?
                    <><CurseForm handlePostCurses={this.handlePostCurses}></CurseForm>
                        {curseSent ? <div>Your curse was sent into the void.</div> : ''}
                    </>
                    : <><CurseForm handlePostCurses={this.handlePostCurses}></CurseForm>
                        <Link className="link-login" to='/login'>...or login here</Link>
                        {curseSent ? <div>Your curse was sent into the void.</div> : ''}
                    </>}
            </div>
        )
    }
}


export default CurseRoute;