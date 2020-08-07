import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import "./LandingPage.css"

class LandingPageRoute extends Component {

    render() {
        return (
            <>
                <h2>About the App</h2>
                <p>Our app gives users a way to curse in a 
                    very anonymous way, curse while logged in, 
                    and bless up to 3 times per day</p>

                <h2>Please note</h2>
                <p>We ask that no racist or bigoted
                    language be used.
                </p>

                <h2 className="Important">IMPORTANT</h2>
                <p>ENTERTAINMENT PURPOSES ONLY</p>
                <p>If you are experiencing mental depression or 
                    other mental problems 
                    PLEASE GET PROFESSIONAL HELP</p>

                <Link className="" to='/curse'>Curse Anonymously</Link>
            </>

        )
    }
}

export default LandingPageRoute;