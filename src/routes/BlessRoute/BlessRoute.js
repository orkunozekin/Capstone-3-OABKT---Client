import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Bless.css";
import config from '../../config';
import TokenService from '../../services/token-service';

class Bless extends Component {

  state = {
    curse: {},
    blessing: []
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
    console.log(blessing_id)
    fetch(`${config.API_ENDPOINT}/curses`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        curse_id: this.state.curse.curse_id,
        blessing_id: blessing_id
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        console.log(json)
      })
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
        this.setState({blessing: json})
      })
  }


  componentDidMount() {
    this.handleGetCurse();
    this.handleGetBlessingOptions();
  }




  render() {
    const curse = this.state.curse.curse;
    console.log(this.state.curse)
    console.log(this.state.blessing)
    return (
      <>
        <h2>Bless A Curse</h2>
        {this.state.curse.length !== 0 ? curse : <p>No curse available</p>}
        <form onSubmit={this.handleBlessCurse} className="bless-form">
          <select name="emojiInput" className="emoji-dropdown">
              <option>Select an Emoji</option>
            {this.state.blessing.map(blessing =>
              <option key={blessing.blessing_id} value={blessing.blessing_id}>&#129311;</option>
            )}
          </select>
          <button type='submit'>Bless This Curse</button>
        </form>
      </>

    )
  }
}

export default Bless;