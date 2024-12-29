import React, { useReducer } from "react";

const initialState = { name: "Amit", age: 30 };
const reducer = (state, action) => {
  switch (action.type) {
    case "incremented_age":
      return {
        name: state.name,
        age: state.age + 1,
      };
    case "changed_name":
      return {
        name: action.nextName,
        age: state.age,
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};
const Reducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  return (
    <div>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </div>
  );
};

export default Reducer2;
