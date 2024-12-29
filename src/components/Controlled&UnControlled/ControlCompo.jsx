// In React, controlled components and uncontrolled components refer to two different approaches to handling form inputs.

// A controlled component is a component where the form data is handled by the React component state.
// React has full control over the value of the input fields.

// An uncontrolled component is a component where the form data is handled by the DOM itself.
// React doesn't manage the value of the input fields. Use refs to access the form data.

import React, { useState } from "react";
import Uncontrolled from "./Uncontrolled";

const ControlCompo = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Value: ${input}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Controlled Input:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Uncontrolled/>
    </div>
  );
};

export default ControlCompo;
