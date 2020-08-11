// disableCookies()
// if (cookies === true) {
//  throw new Error  
// }
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import "./LandingPage.css"
import AppContext from '../../contexts/AppContext'
import Bless from '../BlessRoute/BlessRoute'
import Curse from '../../components/CurseForm/CurseForm'
import Button from '../../components/Button/Button'

class LandingPageRoute extends Component {
    static contextType = AppContext;

    loggedInBlessPart = () => {
        if (this.context.user) {
            return <>
               <Link component={Bless}>
                   <Button className='blessText'>
                       <h2>Bless</h2>
                   </Button>
               </Link>
            </>
        }
    }





    render() {
        return (
            <>
            <div className='curseBlessWrapper'>
            <Link componet={Curse}>
                <Button className='curseText'><h2>Curse</h2>
                </Button>
                </Link>
            {this.loggedInBlessPart()}
            </div>
            </>

        )
    }
}

export default LandingPageRoute;