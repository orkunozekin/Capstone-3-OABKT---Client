import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import Button from '../../components/Button/Button'
import "./Dashboard.css"
import AppContext from '../../contexts/AppContext'

class Dashboard extends Component {



    static contextType = AppContext;

    componentDidMount() {
        this.context.handleGetQuote();
        this.context.handleGetDashboardInfo();
    }

    deleteCurse = (curse_id) => {
        this.context.handleDeleteCurse(curse_id)
    }


    render() {
        console.log(this.context.blessedCurse);
        const { quote, source } = this.context.quotes;
        const curseBlessed = this.context.curseBlessed; // to check if we currently are displaying a blessed curse.


        let blessedCurse; // the first curse in the array of blessed curses of the user's. 
        let totalblessings = 0;
        let emoji;

        if (this.context.user.user && this.context.user.blessedCurses.length !== 0) { //if the user exists and blessedCursed array isn't empty
            totalblessings = this.context.user.user.totalblessings;
            blessedCurse = this.context.blessedCurse; // set the blessedCurse to the first curse in the blessedCurse array from the server.
            emoji = this.context.user.blessedCurses[0].blessing; //supposed to be a UNICODE but comes back as an integer


            return ( 
                <>
                    <div className='quote-box shadow-box'>
                        <h3 className='quote-block'>{quote}</h3>
                        <h4 className='quote-source'>{source}</h4>
                    </div>

                    <div className='blessing-box'>
                        <p>You've given <span className='blessing-count'>{totalblessings}</span> blessing{totalblessings !== 1 && <span>s</span>}!</p>
                    </div>
                    {blessedCurse.length !== 0 &&
                    <>
                        <div className='blessing-recieved'>
                            <h3>You've recieved a blessing!</h3>
                            <div className='curse-blessed'>
                                <h4><b>{blessedCurse}</b></h4>
                            </div>
                            <p>was answered with {emoji}</p>
                            <Button className='next-blessed' onClick={() => this.deleteCurse(this.context.curse_id)}>See another blessed curse</Button>
                        </div> 
                    
                    </> }
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

        else { // if blessedCurses array is empty

            return ( // without the blessed curses
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
}

export default Dashboard;