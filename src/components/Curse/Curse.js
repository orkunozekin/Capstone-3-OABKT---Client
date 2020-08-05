import React, { Component } from 'react';
import CurseForm from '../CurseForm/CurseForm.js';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import './Curse.css';

class Curse extends Component {

    handleClickEvent = (event) => {
        event.preventDefault();
        // logic to send curse to void
    }

    render() {
        return (
            <div className='curse-bless-field'>
                <h2 className='curse-bless-title'>Perform a Curse</h2>
                <CurseForm onClick={e => this.handleClickEvent(e)}></CurseForm>
                <Link className="link-login" to='/login'>...or login here</Link>
            </div>

        )
    }
}

export default Curse;