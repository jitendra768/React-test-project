// PropDriling is basically a situation  when the data sent at almost every level due to requirement in the final level component
import React from 'react'
import ChildrenA from './ChildrenA'

const PropDriling = () => {
    const name = 'John';
  return (
    <div>
        <ChildrenA name={name}/>
    </div>
  )
}

export default PropDriling