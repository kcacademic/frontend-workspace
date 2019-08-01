import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'
import UserList from './UserList'

const query = graphql`
  query AppQuery {
    users {
		... User_viewer
	}
  }
`

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <UserList viewer={props.users} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}

export default App;
