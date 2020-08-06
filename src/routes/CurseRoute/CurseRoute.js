import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import config from '../../config';
import TokenService from '../../services/token-service';

class Curse extends Component {



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
            message: 'Curse sent annonymously',  
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
            <>
                <h2>Curse Here</h2>
                <form onSubmit={this.handlePostCurses}>
                    <textarea name="curseInput" className='curse-box'></textarea>
                    <button type="submit" className='Void'>Send into Void</button>
                </form>
                <Link className="" to='/login'>or login here</Link>
            </>
        )
    }
}

export default Curse;