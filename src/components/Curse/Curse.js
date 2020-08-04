import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { render } from 'react-dom'

class Curse extends Component {

    handleClickEvent = () => {
        // logic to send curse to void
    }

    render() {
        return (
            <>
                <h2>Curse Here</h2>
                <form>
                    <textarea className='curse-box'></textarea>
                    <button className='Void' onClick={this.handleClickEvent}>Send into Void</button>
                </form>
                <Link className="" to='/login'>or login here</Link>
            </>

        )
    }
}

export default Curse;