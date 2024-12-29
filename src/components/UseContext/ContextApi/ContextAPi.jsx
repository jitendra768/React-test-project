// The context provide a way to pass data through the component tree without having prop drilling. 
// Context have main three createContext() Provider Consumer. 
// COntext accept only one funtion in currly bracess{}. 


import React, { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext();
const ContextAPi = () => {
  const name = "Amit";
  return (
    <div>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </div>
  );
};

export default ContextAPi;
export { data };
