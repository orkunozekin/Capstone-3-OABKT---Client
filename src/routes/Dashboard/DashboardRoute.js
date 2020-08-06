import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <p>{quote}</p>
                <p>{source}</p>

                <p>You've given</p>
                <p>{totalblessings}</p>
                <p>blessings</p>
            
                <Link className="curselink linkage" to='/curse'>Curse</Link>
                <Link className="blesslink linkage" to='/bless'>Bless</Link>
            </>

        )
    }
}

export default Dashboard;