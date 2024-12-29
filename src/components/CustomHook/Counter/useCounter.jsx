import { useState } from "react";

const useCounter = (initialValue=0) => {
  const [count, setCount] = useState(initialValue);

  const Increment = () => setCount((prevCount) => prevCount + 1);
  const Decrement = () => setCount((prevCount) => prevCount - 1);
  const Reset = () => setCount(initialValue);

  return { count, Increment, Decrement, Reset };
};

export default useCounter;
