import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import CurseForm from '../../components/CurseForm/CurseForm';
import './CurseRoute.css';
import CurseCheck from './CurseCheck';
// import AlertBox from '../../components/AlertBox/AlertBox';
// import { CSSTransition } from 'react-transition-group';

const cursePromptsArray = [
    'What ails you?',
    'Tell me your frustrations.',
    'Curious, how are you feeling?',
    'Allow you vents to steam onto here.',
    'Write unto me your anger.',
    'Give me a reason to exist, tell me why you are upset.',
    'You deserve to be heard.',
    'I will gladly listen to your angers.'
]

class CurseRoute extends Component {

    state = {
        curseSent: false,
        curseMessage: {
            value: '',
            touched: false
        },
        serverMessage: '',
        cursePrompt: '',
        alertBox: false
    }

    cursePrompt = () => {
        return cursePromptsArray[Math.floor(Math.random() * cursePromptsArray.length)]
    }

    newCurseMessage = (curseMessage) => {
        this.setState({ curseSent: false, curseMessage: { value: curseMessage, touched: true } })
    }

    validateCurseMessage = () => {
        const curseMessage = this.state.curseMessage.value;
        if (curseMessage.length === 0) {
            return 'Input a Curse, mortal.'
        }
        if (curseMessage.length < 10) {
            return 'Curse should contain at least 10 characters'
        }
        let words = curseMessage.trim().split(' ')
        if (words.length <= 2) {
            return 'Curse should contain at least 3 words'
        }
        return '';

    }



    handlePostCurses = (ev) => { // send a curse to the void
        ev.preventDefault()
        const { curseInput } = ev.target;
        let curse = curseInput.value;
        let curseSent = false;
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
                    curseSent = true;
                    this.setState({ curseSent: true })
                    curseInput.value = '';
                }
                return res.json();
            })
            .then(json => {
                if (!curseSent) {
                    this.setState({ serverMessage: json })
                }
                else {
                    this.setState({ serverMessage: '' })
                }

            })
            .catch(error => console.log(error))
    }


    handlePostCursesNonUser = (ev) => { // curse as a non-user without the authoken 
        ev.preventDefault()
        const { curseInput } = ev.target;
        let curse = curseInput.value;
        let curseSent = false;
        fetch(`${config.API_ENDPOINT}/curses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                curse
            })
        })
            .then(res => {
                if (res.ok) {
                    curseSent = true;
                    this.setState({ curseSent: true })
                    curseInput.value = '';
                }
                return res.json();
            })
            .then(json => {
                if (!curseSent) {
                    this.setState({ serverMessage: json })
                }
                else {
                    this.setState({ serverMessage: '' })
                }

            })
            .catch(error => console.log(error))
    }


    handleCurseAgain = () => {
        this.setState({ alertBox: false, curseSent: false })
    }

    componentDidMount = () => {
        let cursePromptMessage = this.cursePrompt();
        this.setState({
            cursePrompt: cursePromptMessage
        })
    }

    render() {
        const { curseSent, serverMessage } = this.state;
        
        if (!curseSent) {
            return (
                <div className='curse-bless-field'>
                    <h2 className='curse-bless-title'>{this.state.cursePrompt}</h2>
                    {TokenService.hasAuthToken() ?
                        <>

                            <CurseForm
                                curseMessage={this.state.curseMessage}
                                newCurseMessage={this.newCurseMessage}
                                handlePostCurses={this.handlePostCurses}
                                validateCurseMessage={this.validateCurseMessage}
                            >
                            </CurseForm>
                            {serverMessage}
                        </>
                        : <>
                            <CurseForm
                                curseMessage={this.state.curseMessage}
                                newCurseMessage={this.newCurseMessage}
                                handlePostCurses={this.handlePostCursesNonUser}
                                validateCurseMessage={this.validateCurseMessage}
                            >
                            </CurseForm>
                            {serverMessage}
                            <Link className="link-login" to='/login'>...or login here</Link>
                        </>}
                </div>
            )
        }
        else {
            return <div>
                <CurseCheck alertBox={this.state.alertBox} serverMessage={this.state.serverMessage} curseSent={this.state.curseSent} handleCurseAgain={this.handleCurseAgain} /></div>
        }

    }
}


export default CurseRoute;