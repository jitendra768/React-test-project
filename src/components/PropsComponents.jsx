// Props (short for properties) are used to pass data from one
// component to another. They are read-only and cannot be modified
// by the receiving component.


import React from 'react'

const PropsComponents = () => {
  return (
    <div>
        <Child message='Hello From Parent'/>
    </div>
  )
}

export default PropsComponents

function Child(props){
    return <h1>{props.message}</h1>
}