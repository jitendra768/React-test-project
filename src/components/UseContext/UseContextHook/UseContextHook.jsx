// The useContext hook is based on Context api and work on the mechanism of Provider createContext useContext.
// It is used to share data between components without passing props down manually.
//provider need to wrap components inside provider component in which data have to be consume

import React, { createContext, useContext } from "react";
import ChildA from "./ChildA";

const data = createContext();

const UseContextHook = () => {
  const name = "amit";
  const age = 25;
  return (
    <div>
      <data.Provider value={{ name, age }}>
        <ChildA />
      </data.Provider>
    </div>
  );
};

export default UseContextHook;
export { data };
