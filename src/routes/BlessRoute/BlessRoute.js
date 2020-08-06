import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import "./Bless.css";
import config from '../../config';
import TokenService from '../../services/token-service';

class Bless extends Component {

    handleGetCurse = () => {
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
              })
    }

    componentDidMount() {
        this.handleGetCurse();
    }

    render() {
        return (
            <>
                <h2>Random curse</h2>
                <form onSubmit={this.handleSubmitClick}>
                    <p>Random curse text. My life is awful, blah blah blah</p>

                    <p>Bless Emoji's drop down</p>

                    <button type='submit'>Send Blessing</button>
                </form>
            </>

        )
    }
}

export default Bless;