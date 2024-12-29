import React from 'react'
import ChildrenB from './ChildrenB'

// Authentication confirms that users are who they say they are.
// Authorization gives those users permission to access a resource.

const ChildrenA = (props) => {
  return (
    <div>
        <ChildrenB name={props.name}/>
    </div>
  )
}

export default ChildrenA