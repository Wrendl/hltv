import React, { Component } from 'react'
import {data} from './data'

const HeaderHome = () => {
    return (
        <h1>TEAM RANKINGS</h1>
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
        <div className='regional-ranking-header'>Counter-Strike World ranking</div>
    )
}

const Body = (props) => {
    const data = [].concat(props.rankData)
    .sort((a, b) => a.points < b.points ? 1 : -1)
    .map((team, index) => {
        return (
            <div key={index} className='ranked-team standard-box'>
                <span className='position'>#{index+1}</span>
                <span className='team-logo'>
                    <img src={team.logo} alt={team.name}></img>
                </span>
                <span className='name'>{team.name}</span>
                <span className='points'>({team.points} points)</span>
                <div className='playersLine'>
                    <div className='rankingNicknames'>{team.players[0].name}</div>
                    <div className='rankingNicknames'>{team.players[1].name}</div>
                    <div className='rankingNicknames'>{team.players[2].name}</div>
                    <div className='rankingNicknames'>{team.players[3].name}</div>
                    <div className='rankingNicknames'>{team.players[4].name}</div>
                </div>
            </div>
        )
    })

    return (
        <tbody>{data}</tbody>
    )
}

class Rankings extends Component {

    state = data

    render() {
        const {teams} = this.state

        if (window.location.href.indexOf("rank") > -1) {
            return (
                <div className='main'>
                    <Header />
                    <Body rankData={teams} />
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

export default Rankings;