import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

class Search extends Component {
  searchUser = () => {
    const {value} = this.inputElement
    // this.props.updateAppState({isFirst: false, isLoading: true})
    PubSub.publish('updateState', {isFirst: false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${value}`).then(res => {
      console.log('res:', res.data)
      // this.props.updateAppState({isLoading: false, userList: res.data.items})
      PubSub.publish('updateState', {isLoading: false, userList: res.data.items})
    }).catch(err => {
      console.log('err:', err)
      // this.props.updateAppState({isLoading: false, errMsg: err.message})
      PubSub.publish('updateState', {isLoading: false, errMsg: err.message})
    })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={node => this.inputElement = node} type="text" placeholder="enter the name you search"/>
          <button onClick={this.searchUser}>Search</button>
        </div>
      </section>
    )
  }
}

export default Search
