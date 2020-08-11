import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import Button from '../../components/Button/Button'
import "./Dashboard.css"
import AppContext from '../../contexts/AppContext'

class Dashboard extends Component {

    static contextType = AppContext;


    render() {
        const quote = this.context.quotes.quote;
        const source = this.context.quotes.source;

        let totalblessings = 0;
    
        if (this.context.user.user) {
            totalblessings = this.context.user.user.totalblessings;
        }

        return (
            <>
                <div className='quote-box shadow-box'>
                    <h3 className='quote-block'>{quote}</h3>
                    <h4 className='quote-source'>{source}</h4>
                </div>

                <div className='blessing-box'>
                    <p>You've given <span className='blessing-count'>{totalblessings}</span> blessing{totalblessings !== 1 && <span>s</span>}!</p>
                </div>

                <div className='button-box'>
                    <Link className="curselink linkage" to='/curse'>
                        <Button className='curse-button'>Curse</Button>
                    </Link>
                    <Link className="blesslink linkage" to='/bless'>
                        <Button className='bless-button'>Bless</Button>
                    </Link>
                </div>
            </>

        )
    }
}

export default Dashboard;