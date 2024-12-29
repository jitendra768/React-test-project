import React, { useState } from "react";

const Chekbox = ({ onDelete, item }) => {
  const [checked, isChecked] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => isChecked(e.target.checked)}
      />
      {item}
      {checked && <button onClick={onDelete}>Delete</button>}
    </div>
  );
};

export default Chekbox;
