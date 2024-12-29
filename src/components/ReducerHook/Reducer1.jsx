import React, { useReducer } from "react";
import Reducer2 from "./Reducer2";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
const Reducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div class="max-w-sm p-6 bg-white ml-20 mb-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          UseReducer Hooks
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {state.count}
      </p>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
        class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        -
      </button>
      {/* <Reducer2/> */}
    </div>
  );
};

export default Reducer1;
