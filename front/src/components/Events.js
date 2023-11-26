import React, { Component } from 'react'
import {data} from './data'


class Events extends Component {

    state = data

    render() {
        const {news} = this.state

        return (
            <div>
                <h1>Events</h1>
            </div>
        )
    }
}

export default Events;