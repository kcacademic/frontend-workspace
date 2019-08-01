import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class User extends Component {

  render() {
    return (
      <div>
        <div>{this.props.viewer.username} ({this.props.viewer.email})</div>
      </div>
    )
  }
  
}

export default createFragmentContainer(User, {viewer: graphql`
  fragment User_viewer on User {
    id
    username
    email
  }
`})