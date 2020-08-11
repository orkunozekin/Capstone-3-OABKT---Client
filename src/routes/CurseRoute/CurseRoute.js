import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import CurseForm from '../../components/CurseForm/CurseForm';
import './CurseRoute.css';
import CurseCheck from './CurseCheck';

class CurseRoute extends Component {

    state = {
        curseSent: false,
        curseMessage: {
            value: '',
            touched: false
        },
        serverMessage: ''
    }

    newCurseMessage = (curseMessage) => {
        this.setState({curseSent:false, curseMessage: { value: curseMessage, touched: true } })
    }

    validateCurseMessage = () => {
        const curseMessage = this.state.curseMessage.value;
        if (curseMessage.length === 0) {
            return ''
        }
        if (curseMessage.length < 10) {
            return 'Curse should contain at least 10 characters'
        }
        if (curseMessage.split(' ').length < 3) {
            return 'Curse should contain at least 3 words'
        }

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
                    this.setState({ curseSent: true })
                    curseInput.value = '';
                }
                return res.json();
            })
            .then(json => {
                console.log(json)
                this.setState({ serverMessage: json })
            
            })
            .catch(e => console.log(e.json()))
    }

    render() {
        const curseSent = this.state.curseSent;
        const curseMessage = this.state.curseMessage.value;

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
                        <CurseCheck serverMessage={this.state.serverMessage} curseSent={this.state.curseSent} />
                    </>
                    : <><CurseForm
                        curseMessage={this.state.curseMessage}
                        newCurseMessage={this.newCurseMessage}
                        handlePostCurses={this.handlePostCurses}
                        validateCurseMessage={this.validateCurseMessage}
                    >
                    </CurseForm>
                    <CurseCheck serverMessage={this.state.serverMessage} curseSent={this.state.curseSent} />
                        <Link className="link-login" to='/login'>...or login here</Link>
                    </>}
            </div>
        )
    }
}


export default CurseRoute;