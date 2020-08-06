import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import config from '../../config';
import TokenService from '../../services/token-service';
import CurseForm from '../../components/CurseForm/CurseForm';
import './CurseRoute.css';

class CurseRoute extends Component {

    handlePostCurses = (ev) => {
        ev.preventDefault()
        const { curseInput } = ev.target
        const curse = curseInput.value;
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
                console.log(json)
            })
    }
    render() {
        return (
            <div className='curse-bless-field'>
                <h2 className='curse-bless-title'>Perform a Curse</h2>
                <CurseForm onSubmit={this.handlePostCurses}></CurseForm>
                <Link className="link-login" to='/login'>...or login here</Link>
            </div>
        )
    }
}


export default CurseRoute;