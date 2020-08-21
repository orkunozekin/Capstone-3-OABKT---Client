import React, { Component } from 'react'
import ErrorPage from '../../components/ErrorPage/ErrorPage'
import { Link } from 'react-router-dom'
import './NotFoundRoute.css'

class NotFoundRoute extends Component {
  render() {
    return (
      <div className='error-route-container'>
        <h2 className='errorh2'>You are somewhere you shouldn't be...</h2>
        <Link className='errorlink' to='/'>Let's head home</Link>
        <div className='ofCourse'>
          <p>Of course, the customer is always right.  Which of these people
        gets fired for their mistake that brought you here?<br></br>
        (Go ahead and click on the one we should fire)</p>
        </div>
        <ErrorPage />
      </div>
    );
  }
}

export default NotFoundRoute
