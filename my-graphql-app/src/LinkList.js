import React, { Component } from 'react'
import Link from './Link'

class LinkList extends Component {

  render() {
    return (
	  <div>
        {this.props.viewer.map((user) =>		
			<Link key={user.__id} viewer={user} />
        )}
      </div>
    )
  }

}

export default LinkList