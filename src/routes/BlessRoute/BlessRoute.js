import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Bless.css";
import config from '../../config';
import TokenService from '../../services/token-service';

class Bless extends Component {

  state = {
    curse: {}
  }

   componentDidMount() {
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

 

  render() {
    const curse = this.state.curse.curse;
    console.log(this.state.curse)
    return (
      <>
        <h2>Bless A Curse</h2>
        {this.state.curse.length === 0 ? curse : <p>No curse available</p>}
        <form className="bless-form">
          <select className="emoji-dropdown">
            <option>Emojis</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <button type='submit'>Bless This Curse</button>
        </form>
      </>

    )
  }
}

export default Bless;