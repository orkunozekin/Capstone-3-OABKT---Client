import React, { Component } from 'react';
import './CurseForm.css'

export default class CurseForm extends Component {

    render() {
        return (
            <form onSubmit={this.props.handlePostCurses} className='curse-form'>
                <textarea name='curseInput' className='curse-box'></textarea>
                <button className='void-button' type='submit'>Send into Void</button>
            </form>
        )
    }
}