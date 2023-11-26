import React, { Component } from 'react'
import {data} from './data'


class Profile extends Component {

    state = data

    render() {
        const {news} = this.state

        return (
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile;