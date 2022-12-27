import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


class App extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    errMsg: ''
  }

  updateAppState = (state) => {
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}

export default App
