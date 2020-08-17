import React, { Component } from 'react';
import './CurseForm.css'

export default class CurseForm extends Component {

    render() {
        const validateCurseMessage = this.props.validateCurseMessage;
        const newCurseMessage = this.props.newCurseMessage;
        const handlePostCurses = this.props.handlePostCurses;
        const curseMessage = this.props.curseMessage;
        return (
            <form onSubmit={ev => handlePostCurses(ev)} className='curse-form'>
                <textarea onChange={ev => newCurseMessage(ev.target.value)} name='curseInput' className='curse-box'></textarea>
                <button disabled={validateCurseMessage()} className='void-button' type='submit'>Send into Void</button>
                <p className="curse-input-error">{curseMessage.touched &&
                                    validateCurseMessage()
                                }</p>
            </form>
        )
    }
}