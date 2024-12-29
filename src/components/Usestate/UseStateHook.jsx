// The React useState Hook allows us to track state in a function component.
// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.

import React, { useState } from 'react'

const UseStateHook = () => {
    const [count,setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default UseStateHook