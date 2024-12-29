// A Pure Component  component that performs a shallow comparison of props and state to determine whether the component should re-render.
//  If the props and state remain the same, the component prevents re-rendering, thus improving performance.

import { PureComponent } from "react";

// Pure Components are essentially class components that extend React.
// PureComponent, which implements shouldComponentUpdate() with a shallow prop and state comparison.

// React.PureComponent is a class-based component. For functional components,
//  you can use React.memo() to achieve similar behavior.

class Counter extends PureComponent {  //The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class.
  constructor(props) {
    super(props);   //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    this.state = {
      count: 0,
    };
  }

  increment=()=>{
    this.setState({count:this.state.count+1})
  }

  render() {     // The render() method is a pure function, meaning it does not modify the state or interact with the DOM directly—it only returns React elements.
    console.log("Rendering Counter...");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
