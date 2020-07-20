import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cat from './images/cutecat.jpg'

class Error extends Component {

    render() {
        return (

            <div className="text-center">
                <h1 className="text-center mb-4">Error</h1>
                <h4>We’re sorry we couldn’t find what you’re looking for. Let us make it up to you with a picture of a cute cat.</h4>
                <img src={cat} alt="Cute Cat" width="600px" />
                <p></p>
                <Link to="/" className="btn btn-primary">Go back home</Link>
            </div>
        )
    }
}

export default Error