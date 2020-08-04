import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import "./Dashboard.css"

class Dashboard extends Component {

    render() {
        return (
            <>
                <p>Quote randomly pulled</p>
                <p>-Source</p>

                <p>You've given</p>
                <p>##</p>
                <p>blessings</p>
            
                <Link className="curselink linkage" to='/curse'>Curse</Link>
                <Link className="blesslink linkage" to='/bless'>Bless</Link>
            </>

        )
    }
}

export default Dashboard;