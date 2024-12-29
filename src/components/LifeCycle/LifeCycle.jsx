//1. constructor(props):
//  Called before the component is mounted.
//  Used to initialize state and bind methods.

// 2. componentDidMount():
//    Invoked immediately after a component is mounted.
//    Commonly used for data fetching, subscriptions, or setting up timers.

// 3.shouldComponentUpdate(nextProps, nextState):
//  Determines whether the component should re-render based on changes in props or state.
//  Returns true or false.

// 4. componentDidUpdate(prevProps, prevState):
//  Called immediately after updating occurs.
//  Can be used to perform operations after a component has updated (e.g., fetching data based on prop changes).

// componentWillUnmount():
//  Invoked immediately before a component is unmounted and destroyed.
//  Ideal for cleanup tasks, like canceling network requests or removing event listeners.

// 6. componentDidCatch(error, info):
//  Used for error handling in child components.
//  Allows you to log errors and display fallback UI.

import React from "react";

const LifeCycle = () => {
  return <div>LifeCycle</div>;
};

export default LifeCycle;
