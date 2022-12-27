import React, { Component } from 'react'
import './index.css'

class List extends Component {
  render() {
    const { userList } = this.props
    return (
      <div className="row">
        {
          userList.map(item => {
            return (
              <div key={item.id} className="card">
                <a href={item.html_url} target="_blank">
                  <img src={item.avatar_url} alt="avatar" style={{width: '100px'}}/>
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default List
