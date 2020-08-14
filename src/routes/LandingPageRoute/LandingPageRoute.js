import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"
import WarningBox from '../../components/WarningBox/WarningBox'
import Button from '../../components/Button/Button'

class LandingPageRoute extends Component {

    render() {
        return (
            <div className="landing-page-wrapper">
                <section>
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

                    <Link className="curse-anon-link" to='/curse'>Curse Anonymously</Link>
                    <Button className='curse-anon-button'>Curse Anon</Button>
                </section>
                <section>
                    <WarningBox />
                </section>

            </div>

        )
    }
}

export default LandingPageRoute;