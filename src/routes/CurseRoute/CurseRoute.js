import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import CurseForm from '../../components/CurseForm/CurseForm';
import './CurseRoute.css';

class CurseRoute extends Component {

    state = {
        curseSent: false,
        curseMessage: {
            value: '',
            touched: false
        }
    }
    
    newCurseMessage = (curseMessage) => {
        this.setState({ curseMessage: { value: curseMessage, touched: true } })
    }

    validateCurseMessage = () => {
        const curseMessage = this.state.curseMessage.value;
        if (!curseMessage) {
            return 'Curse should include characters'
        }

        // const folder = this.state.folderName.value;
        // if (!folder) {
        //     return 'Selecting a folder is required'
        // }
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
                console.log(json)
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
                    <>
                        <CurseForm
                            curseMessage={this.state.curseMessage}
                            newCurseMessage={this.newCurseMessage}
                            handlePostCurses={this.handlePostCurses}
                            validateCurseMessage={this.validateCurseMessage}
                        >
                        </CurseForm>
                        {curseSent ? <div>Your curse was sent into the void.</div> : ''}
                    </>
                    : <><CurseForm
                            curseMessage={this.state.curseMessage}
                            newCurseMessage={this.newCurseMessage}
                            handlePostCurses={this.handlePostCurses}
                            validateCurseMessage={this.validateCurseMessage}
                        >
                        </CurseForm>
                        <Link className="link-login" to='/login'>...or login here</Link>
                        {curseSent ? <div>Your curse was sent into the void.</div> : ''}
                    </>}
            </div>
        )
    }
}


export default CurseRoute;