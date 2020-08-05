import React, { Component } from 'react';
import './CurseForm.css'

export default class CurseForm extends Component {

    render() {
        return (
            <form className='curse-form'>
                <textarea className='curse-box'></textarea>
                <button className='void-button' type='submit' onClick={this.props.onClick}>Send into Void</button>
            </form>
        )
    }
}