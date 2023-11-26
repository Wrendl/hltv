import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News'
import Layout from './components/Layout';
import Home from './components/Home';
import Rankings from './components/Rankings';
import Events from './components/Events';
import Matches from './components/Matches';
import Profile from './components/Profile';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="rank" element={<Rankings />} />
          <Route path="events" element={<Events />} />
          <Route path="matches" element={<Matches />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App;