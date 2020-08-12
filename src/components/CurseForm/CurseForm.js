import React, { Component } from 'react';
import './CurseForm.css'


export default class CurseForm extends Component {


    // appearOnType = (curseInput) => {
    //     document.getElementById("curseInput").innerHTML = curseInput.value;
    // }

    render() {
        return (
            <>
            {/* <div className='inkBlots'></div> */}
            <div className='curse-form-wrapper'>
            <form onSubmit={this.props.handlePostCurses} className='curse-form'>
                <textarea name='curseInput' className='curse-box' id='curseInput'></textarea>
                <button className='pill' type='submit'>Send into Void</button>
            </form>
            <div className='scrollBottom'></div>
            </div>
            
            
            
            </>
        )
    }
}