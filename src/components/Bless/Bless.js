import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import "./Bless.css"

class Bless extends Component {

    handleSubmitClick = () => {
        // send blessing

        // reroute to dashboard
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