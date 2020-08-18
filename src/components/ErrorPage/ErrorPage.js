import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './keith.png'
import './adam.png'
import './thomas.png'
import './brian.png'
import './luke.png'
import './orkun.png'
import './ErrorPage.css'
import './nowHiring.png'

export default class ErrorPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      complete: false,
      
    }
  }


 handleFire = (e) => {
   if (!this.state.complete) {
     this.setState({complete: true})
     document.getElementById(e.target.id).id = 'fired'
  }
}

 

  render(){

    return(
      <>
      
      <div className='errorWrapper'>
      <div onClick={this.handleFire} id='keith' className='pic'></div>
      <div onClick={this.handleFire} id='thomas' className='pic'></div>
      <div onClick={this.handleFire} id='brian' className='pic'></div>
      <div onClick={this.handleFire} id='adam' className='pic'></div>
      <div onClick={this.handleFire} id='orkun' className='pic'></div>
      <div onClick={this.handleFire} id='luke' className='pic'></div>
      
      
      </div>
      </>
    )
  }
}

