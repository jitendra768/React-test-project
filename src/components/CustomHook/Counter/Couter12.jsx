import React from "react";
import useCounter from "./useCounter";

// Custom hooks are user-defined functions in React that start with the prefix use.
// They allow you to reuse stateful logic across components without duplicating code.
// Custom hooks encapsulate reusable logic and can utilize other React hooks internally.

const Couter12 = () => {
  const { count, Increment, Decrement, Reset } = useCounter(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Couter12;
