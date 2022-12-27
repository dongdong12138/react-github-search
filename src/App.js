import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'


class App extends Component {
  state = {
    userList: []
  }

  saveUserList = (list) => {
    this.setState({userList: list})
  }

  render() {
    const { userList } = this.state
    return (
      <div className="container">
        <Search saveUserList={this.saveUserList}/>
        <List userList={userList}/>
      </div>
    )
  }
}

export default App
