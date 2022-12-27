import React, { Component } from 'react'
import './index.css'

class List extends Component {
  state = {
    userList: [],
    isFirst: true,
    isLoading: false,
    errMsg: ''
  }

  render() {
    const {userList, isFirst, isLoading, errMsg} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>Enter Username To Search</h2> :
            isLoading ? <h2>Loading...</h2> :
              errMsg ? <p>{errMsg}</p> :
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
