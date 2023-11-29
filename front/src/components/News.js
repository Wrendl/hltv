import React, { Component } from 'react'
import {data} from './data'

const Header = () => {
    return (
        <div>Today's news</div>
    )
}

const Body = (props) => {

    const data = props.newsData.map((row, index) => {
        return (    
            <div>
                <div key={index} className='ranked-team standard-box'>
                    <span className='news_title'>{row.title}</span>
                </div>
            </div>
        )
    })

    return (
        <tbody>{data}</tbody>
    )
}

class News extends Component {

    state = data

    render() {
        const {news} = this.state
        if (window.location.href.indexOf("news") > -1) {
            return (
                <div className='main'>
                    <Header />
                    <Body newsData={news} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <Header />
                    <Body newsData={news} />
                </div>
            )
        }
    }
}

export default News;