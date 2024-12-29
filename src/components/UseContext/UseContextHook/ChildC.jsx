import React, { useContext } from 'react'
import { data } from './UseContextHook'

const ChildC = () => {
    const {name,age} = useContext(data);
  return (
    <div>
        <h1>My name is {name} and age is{age}</h1>
    </div>
  )
}

export default ChildC