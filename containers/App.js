import React, { Component } from 'react'
import Header from '../components/Header'
import Toolbar from './Toolbar'
import ShotList from './ShotList'
import TestBtn from './TestBtn'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Toolbar />
        <div id={"wrap-inner"}>
          <ShotList />
        </div>
      </div>
    )

  }
}
