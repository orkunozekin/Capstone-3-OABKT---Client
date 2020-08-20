import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./LandingPage.css"
import WarningBox from '../../components/WarningBox/WarningBox'
import Button from '../../components/Button/Button'
import AppContext from '../../contexts/AppContext'

class LandingPageRoute extends Component {
    static contextType = AppContext;

    render() {
        let button;
        if (!this.context.loggedIn) {
            button = <Button className='curse-anon-button'>Curse Anonymously</Button>;
        } else {
            button = <Button className='curse-anon-button'>Curse now!</Button>;
        }
        return (
            <div className="landing-page-wrapper">
                <section className='information-page'>
                    <div className='information-block'>
                        <h2>About Cursr</h2>
                        <p>Tired of being calm or serene?  Need to blurt out your anger?  Cursr is the premier 'vent app', a simple and powerful app that lets your throw your curses out into the void!  Cursr lets user write in random curses anonymously, and lets other users read a single curse to give them a blessing, letting <strong>you</strong> know that someone out there has read your anger, and has listened to you.</p>
                    </div>

                    <div className='information-block'>
                        <h2>Notice on Curses on Cursr</h2>
                        <p>While we encourage you to vent your angers and frustrations, we kindly ask that you <strong>do not use</strong> bigoted or racist language in the app.</p>
                    </div>

                    <div className='information-block'>
                        <h2 className="Important">Lastly...</h2>
                        <p>Cursr is an App for <strong><span className='important-notice'>entertainment purposes only.</span></strong></p>
                        <p>If you are suffering from any mental issues or are struggling to cope with your mental health, we recommend you seek professional help.</p>
                    </div>

                    <Link className="curse-anon-link" to='/curse'>{button}</Link>
                    
                </section>
            </div>
        )
    }
}

export default LandingPageRoute;