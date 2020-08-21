import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import "./Bless.css";
import config from '../../config';
import TokenService from '../../services/token-service';
import AlertBox from '../../components/AlertBox/AlertBox';
import AppContext from '../../contexts/AppContext';

class Bless extends Component {

  state = {
    curse: {},
    blessing: [],
    blessingMessage: '',
    blessingSent: false,
    alertBox: false,
    emojiSelected: false
  };

  static contextType = AppContext;

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
        this.setState({ curse: json });
      });
  };


  handleBlessCurse = (ev) => { //Bless a curse
    ev.preventDefault();
    const { emojiInput } = ev.target;
    const blessing_id = emojiInput.value;
    const curseId = this.state.curse.curse_id;
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
        if (res.message !== undefined) {
        }
        return res.json();
      })
      .then(json => {
        this.setState({ blessingMessage: json, blessingSent: true, alertBox: true });

      })
      .catch(error => console.log(error)
      );
  };



  handleBlockUser = () => {
    const curseId = this.state.curse.curse_id;
    fetch(`${config.API_ENDPOINT}/user`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        curse_id: curseId
      })
    })
      .then(res => {
        if (res.message !== undefined) {
        }
        return res.json();
      })
      .then(json => {
        this.handleGetCurse();

      })
      .catch(error => console.log(error)
      );
  };

  handleBlessAnotherCurse = () => {
    this.setState({ alertBox: false, blessingSent: false });
    this.handleGetCurse();
  };

  componentDidMount() {
    this.handleGetCurse();
  }

  checkButton = () => {

    if (this.state.emojiSelected && this.state.curse !== 'No available curses' && this.state.blessingSent === false) {
      return <Button className='bless-a-curse-button bless-button-ready'>Bless This Curse</Button>;
    }
    else if (!this.state.emojiSelected) {
      return <Button className='bless-a-curse-button bless-button-ready' onClick={() => this.handleBlessAnotherCurse()}>Different Curse</Button>;
    }
    else {
      return <Button className='bless-a-curse-button' disabled>Bless This Curse</Button>;
    }
  };

  render() {
    const curse = this.state.curse.curse;

    if (this.state.blessingMessage === `You're out of blessings`) {
      return (
        <div className='bless-container'>
          <h2>You are out of blessings</h2>
          <Link to="/dashboard">
            <Button className='bless-return'>Go back</Button>
          </Link>
        </div>
      );
    }

    else if (this.state.curse === 'No available curses') {
      return (
        <div className='bless-container'>
          <h2>No available curses at this time.</h2>
          <Link to="/dashboard"><Button className='bless-return'>Go back</Button></Link>
        </div>
      );
    }

    else if (this.state.blessingSent && this.state.alertBox) { // if the alert box is being displayed, display nothing else.
      return <AlertBox function={this.handleBlessAnotherCurse} link={'Bless Another Curse'} message={`You have blessed this curse: ${curse}. `} flag={'blessy'} />;
    }

    else {
      return (
        <div className='bless-container'>
          <h2 className='curse-bless-title'>Bless A Curse</h2>

          {this.state.curse === 'No available curses' ? <p className='curse-message'>No available curses</p> : <p className='curse-message'>{curse}</p>}
          <form onSubmit={this.handleBlessCurse} className="bless-form">
            {this.state.curse === 'No available curses' ? <select id="emojiDropdown" name="emojiInput" className="emoji-dropdown" disabled></select> :
              <select id="emojiDropdown" onChange={() => this.setState({ emojiSelected: true })} name="emojiInput" className="emoji-dropdown">
                <option>Select an Emoji</option>
                {this.context.emoji.map(blessing =>
                  <option key={blessing.blessing_id} value={blessing.blessing_id}>{String.fromCodePoint(parseInt(blessing.blessing.slice(2), 16))}</option>
                )}</select>}

            {this.checkButton()}
          </form>
          {this.state.curse === 'No available curses' ? <button className='block-button' onClick={this.handleBlockUser} disabled>No more from this user</button> : <button className='block-button' onClick={this.handleBlockUser}>No more from this user</button>}
        </div>

      );
    }

  }
}

export default Bless;