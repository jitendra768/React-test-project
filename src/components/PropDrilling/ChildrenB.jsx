import React from 'react'
import ChildrenC from './ChildrenC'

const ChildrenB = (props) => {
  return (
    <div>
        <ChildrenC name={props.name}/>
    </div>
  )
}

export default ChildrenB