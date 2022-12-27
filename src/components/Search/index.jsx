import React, { Component } from 'react'

class Search extends Component {
  searchUser = () => {
    console.log(this.inputElement.value)
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
