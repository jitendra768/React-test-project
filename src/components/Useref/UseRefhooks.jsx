// It can be used to access a DOM element directly.
// It can be used to store a mutable value that does not cause a re-render when updated.
// useRef() only returns one item. It returns an Object called current.

import React, { useEffect, useRef } from "react";
import Render1 from "../RenderList/Render1";
import Render2 from "../RenderList/Render2";

const UseRefhooks = () => {
  const countvalue = useRef(0);
  const divRefrence = useRef();
  const refFocus = useRef();

  const handleClick = () => {
    countvalue.current++;
    console.log(countvalue.current);
  };

  useEffect(() => {
    const divref = divRefrence.current;
    console.log(divref);
  }, []);

  useEffect(()=>{
   refFocus.current.focus();
  },[])
  return (
    <div>
      <h1>Useref Hook</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divRefrence} className="hello">
        Hello world
      </div>
      <input ref={refFocus} type="text" placeholder="enter something"/>
      <br/>
      <Render1/>
      <Render2/>
    </div>
  );
};

export default UseRefhooks;
