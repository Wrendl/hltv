import React, { Component } from 'react'
import {data} from './data'


class Matches extends Component {

    state = data

    render() {
        const {news} = this.state

        return (
            <div>
                <h1>Matches</h1>
            </div>
        )
    }
}

export default Matches;