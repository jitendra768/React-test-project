import React, { useState } from "react";

const DynamicField = () => {
  const [fields, setFields] = useState([]);

  // Add new field
  const addField = () => {
    setFields([...fields, ""]); // Add an empty string as a new field
  };

  // Delete field by index
  const deleteField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  // Handle input change
  const handleInputChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  return (
    <div>
      <h2>Dynamic Fields</h2>
      <button onClick={addField}>Add Field</button>

      {fields.map((field, index) => (
        <div
          key={index}
          style={{ display: "flex", gap: "10px", margin: "10px 0" }}
        >
          <input
            type="text"
            value={field}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder="Enter text"
          />
          <button onClick={() => deleteField(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DynamicField;
