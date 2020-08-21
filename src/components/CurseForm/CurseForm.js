import React, { Component } from 'react';
import './CurseForm.css';

export default class CurseForm extends Component {

    render() {
        const validateCurseMessage = this.props.validateCurseMessage;
        const newCurseMessage = this.props.newCurseMessage;
        const handlePostCurses = this.props.handlePostCurses;
        const curseMessage = this.props.curseMessage;

        let buttonClass = 'void-button';
        if (!validateCurseMessage()) {
            buttonClass += ' void-button-ready';
        }
        return (
            <form onSubmit={ev => handlePostCurses(ev)} className='curse-form'>
                <textarea onChange={ev => newCurseMessage(ev.target.value)} name='curseInput' className='curse-box'></textarea>
                <button disabled={validateCurseMessage()} className={buttonClass} type='submit'>Send into Void</button>
                {validateCurseMessage() &&
                    <p className="curse-input-error">
                        {validateCurseMessage()}
                    </p>}
            </form>
        );
    }
}