// useCallback is a React Hook that is used to memoize a callback function.
// This helps prevent unnecessary re-creations of functions on every render, which can be important for performance optimization,
// especially when passing functions as props to child components that are wrapped in React.
// memo or when the callback is a dependency of other hooks.
import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child';

const UseCallBackHook = () => {
    const [add,setAdd] = useState(0);

    let learning = useCallback(()=>{
        //somthing
    })
  return (
    <div>
        <h1>Reading UseCallBack</h1>
        <Child learning={learning}/>
        <p>{add}</p>
        <button onClick={()=>setAdd(add+1)}>Click me</button>
    </div>
  )
}

export default UseCallBackHook