import React, { Component } from 'react';
import './CurseForm.css'


export default class CurseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isScrolling: false,
            isSpinning: false,
        }
    }


    // appearOnType = (curseInput) => {
    //     document.getElementById("curseInput").innerHTML = curseInput.value;
    // }

    postAndTranslate = (ev) => {
        ev.preventDefault()
        if (!this.state.isScrolling) {
            let input = document.getElementById('curseInput').value
            this.props.handlePostCurses(input)
            this.startTranslate()
            // curseInput.value = '';
        }
    }

    startTranslate = () => {
        this.setState({ isScrolling: true })
        setTimeout(()=>{
            this.setState({isSpinning: true})
            //set timeout remove spinning and scrolling......later
            
        }, 1000)
    }

    render() {
        let formStyle = {}
        if (this.state.isScrolling) {
            formStyle['marginTop'] = '50%'
        }
        let buttonStyle = {}
        let buttonClass = 'pill'
        if(this.state.isSpinning) {
            buttonClass+=' curse-spin '
            buttonStyle['marginLeft'] = '75%'
        }
        return (
            <>
                {/* <div className='inkBlots'></div> */}
                <div className='curse-form-wrapper'>
                    <form style={formStyle} className='curse-form'>
                        <textarea name='curseInput' className='curse-box' id='curseInput'></textarea>

                    </form>
                    <button style={buttonStyle} onClick={this.postAndTranslate} className={buttonClass}>Send into Void</button>
                    <div className='scrollBottom'></div>
                </div>



            </>
        )
    }
}