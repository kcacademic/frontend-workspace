import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
import LinkList from './LinkList'

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    users {
		... Link_viewer
	}
  }
`


class LinkListPage extends Component {

	
  render() {
	
    return (
      <QueryRenderer
        environment={environment}
        query={LinkListPageQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <LinkList viewer={props.users} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default LinkListPage