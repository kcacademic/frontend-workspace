import React, { Component } from 'react'
import User from './User'

class UserList extends Component {

  render() {
    return (
	  <div>
        {this.props.viewer.map((user) =>		
			<User key={user.__id} viewer={user} />
        )}
      </div>
    )
  }

}

export default UserList