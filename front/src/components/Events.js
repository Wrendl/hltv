import React, { Component } from 'react'
import {data} from './data'

const HeaderHome = () => {
    return (
        <h1>EVENTS</h1>
    )   
}

const BodyHome = (props) => {
    const dataMainPage = [].concat(props.rankData)
    .sort((a, b) => a.points < b.points ? 1 : -1)
    .map((row, index) => {
        return (
            <div key={index}>
                <p>{index+1}. {row.name}</p>
            </div>
        )
    })

    return (
        <tbody>{dataMainPage}</tbody>
    )
}

const Header = () => {
    return (
        <div className='regional-ranking-header'>Ongoing events</div>
    )
}

const Body = (props) => {
    const data = [].concat(props.rankData)
    .map((event, index) => {
        return (
            <div key={index} className='ranked-team standard-box'>
                <div className='position'>{event.name}</div>
                <div className='position'>{event.location}</div>
                <div>
                  <span className='position'>{event.date}</span>
                  <span className='position'>{event.prize}</span>
                  <div className='postion'>Date</div>
                  <span className='position'>prize</span>
                </div>
            </div>
        )
    })

    return (
        <tbody>{data}</tbody>
    )
}

class Events extends Component {

    state = data

    render() {
        const {events} = this.state
        const {teams} = this.state

        if (window.location.href.indexOf("events") > -1) {
            return (
                <div className='main'>
                    <Header />
                    <Body rankData={events} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <HeaderHome />
                    <BodyHome rankData={teams} />
                </div>
            )
        }
    }
}

export default Events;