import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Link extends Component {

  render() {
	  
	//console.log(this.props.user)
	  
    return (
      <div>
        <div>{this.props.viewer.username} ({this.props.viewer.email})</div>
      </div>
    )
  }
  
}

export default createFragmentContainer(Link, {viewer: graphql`
  fragment Link_viewer on User {
    id
    username
    email
  }
`})