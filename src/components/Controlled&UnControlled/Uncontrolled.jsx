import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submited input, ${inputRef.current.value}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Uncontrolled Input:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
