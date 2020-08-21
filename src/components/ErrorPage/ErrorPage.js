import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import './keith.png';
import './adam.png';
import './thomas.png';
import './brian.png';
import './mike.png';
import './orkun.png';
import './ErrorPage.css';
import './nowHiring.png';

const staffArray = ['keith', 'thomas', 'brian', 'adam', 'orkun', 'mike', 'fired'];
export default class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
    };
  }



  handleFire = (e) => {
    if (!this.state.complete) {
      this.setState({ complete: true });
      document.getElementById(e.target.id).id = 'fired';
    }
  };



  render() {
    let staffClass = this.state.complete ? 'pic' : 'pic ready-to-fire';
    return (
      <>

        <div className='errorWrapper'>
          <div onClick={this.handleFire} id='keith' className={staffClass}></div>
          <div onClick={this.handleFire} id='thomas' className={staffClass}></div>
          <div onClick={this.handleFire} id='brian' className={staffClass}></div>
          <div onClick={this.handleFire} id='adam' className={staffClass}></div>
          <div onClick={this.handleFire} id='orkun' className={staffClass}></div>
          <div onClick={this.handleFire} id='mike' className={staffClass}></div>
        </div>
      </>
    );
  }
}

