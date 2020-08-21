import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import "./Dashboard.css";
import AppContext from '../../contexts/AppContext';

class Dashboard extends Component {



    static contextType = AppContext;

    componentDidMount() {
        this.context.handleGetDashboardInfo();
    }

    deleteCurse = (curse_id) => {
        this.context.handleDeleteCurse(curse_id);
    };

    render() {
        const { quote, source } = this.context.quotes;

        const emojis = this.context.emoji; // array of blessing emojis

        let blessedCurse; // the first curse in the array of blessed curses of the user's. 
        let totalblessings = this.context.user.user.totalblessings;
        let emoji;

        if (this.context.user && this.context.user.user && this.context.user.blessedCurses.length !== 0) { //if the user exists and blessedCursed array isn't empty
            blessedCurse = this.context.blessedCurse; // set the blessedCurse to the first curse in the blessedCurse array from the server.
            emoji = emojis.length > 1 ? emojis[this.context.user.blessedCurses[0].blessing - 1].blessing : 'ab11111';
            //supposed to be a UNICODE but comes back as an integer
            emoji = String.fromCodePoint(parseInt(emoji.slice(2), 16));

            return (
                <div className="dashboard-wrapper">
                    <div className='quote-box shadow-box'>
                        <blockquote className='quote-block'><p>{quote}</p></blockquote>
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
                                <p>was answered with: </p>
                                <div className='emoji-text'>{emoji}</div>
                                <Button className='next-blessed' onClick={() => this.deleteCurse(this.context.curse_id)}>See another blessed curse</Button>
                            </div>

                        </>}
                    <div className='button-box'>
                        <Link className="curselink linkage" to='/curse'>
                            <Button className='curse-now-button curse-button'>Curse</Button>
                        </Link>
                        <Link className="blesslink linkage" to='/bless'>
                            <Button className='bless-button bless-now-button'>Bless</Button>
                        </Link>
                    </div>
                </div>

            );
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
                            <Button className='curse-button curse-now-button'>Curse</Button>
                        </Link>
                        <Link className="blesslink linkage" to='/bless'>
                            <Button className='bless-button bless-now-button'>Bless</Button>
                        </Link>
                    </div>
                </>

            );
        }

    }
}

export default Dashboard;