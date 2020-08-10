import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import "./Bless.css";
import config from '../../config';
import TokenService from '../../services/token-service';

class Bless extends Component {

  state = {
    curse: {},
    blessing: [],
    blessingsCount:''
  }

  handleGetCurse = () => { //Get a curse
    fetch(`${config.API_ENDPOINT}/curses`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        console.log(json)
        this.setState({ curse: json })
      })
  }


  handleBlessCurse = (ev) => { //Bless a curse
    ev.preventDefault();
    const { emojiInput } = ev.target;
    const blessing_id = emojiInput.value
    const curseId = this.state.curse.curse_id
    fetch(`${config.API_ENDPOINT}/curses`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        curse_id: curseId,
        blessing_id: blessing_id
      })
    })
      .then(res => {
          if (res.message === !undefined){
            alert(`${res.message}`)
            // pull up new curse to bless
            this.handleGetCurse()
          }
          return res.json();
      })
      .then(json => {
        this.setState({ blessingsCount: json })
      })
      .catch(error => console.log(error)
    )
  }

  handleGetBlessingOptions = () => {
    fetch(`${config.API_ENDPOINT}/blessings`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()},`
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(json => {
        this.setState({ blessing: json })
      })
  }


  componentDidMount() {
    this.handleGetCurse();
    this.handleGetBlessingOptions();
  }


  render() {
    const curse = this.state.curse.curse;

    if (this.state.blessingsCount === `You're out of blessings`) {
      return (
        <div>You are out of blessings</div>
      )
    }
    else {
      return (
        <div className='bless-container'>
          <h2 className='curse-bless-title'>Bless A Curse</h2>
          
          {this.state.curse === 'No available curses' ? <p className='curse-message'>No available curses</p> : <p className='curse-message'>curse</p>}
          <form onSubmit={this.handleBlessCurse} className="bless-form">
            <select name="emojiInput" className="emoji-dropdown">
              <option>Select an Emoji</option>
              {this.state.blessing.map(blessing =>
                <option key={blessing.blessing_id} value={blessing.blessing_id}>&#129311;</option>
              )}
            </select>
            <Button type='submit'>Bless This Curse</Button>
          </form>
        </div>
  
      )
    }
    
  }
}

export default Bless;