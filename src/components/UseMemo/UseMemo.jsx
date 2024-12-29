//Memoize the result of a function, which can help optimize expensive calculations.
//useMemo only recomputes the function when one of its dependencies changes.
//useMemo is used to cache the result of a computation.
//useMemo is used to avoid expensive calculation on every render

import React, { useMemo, useState } from 'react'

export const UseMemo = () => {
    const [add,setAdd] = useState(0);
    const [sub,setSub] = useState(100);

    const handleAdd=()=>{
        setAdd(add+1)
    }
    const handleSub=()=>{
        setSub(sub-1)
    }

    const multiplication = useMemo(()=>{
        console.log('********')
        return add*10
    },[add])
   
  return (
    <div>
        <h1>UseMemo Hook</h1>
        {multiplication} <br/>
        <span>{add}</span>
        <button onClick={handleAdd}>Addition</button>
        <br/>
        <button onClick={handleSub}>Subtraction</button>
        <span>{sub}</span>
    </div>
  )
}
