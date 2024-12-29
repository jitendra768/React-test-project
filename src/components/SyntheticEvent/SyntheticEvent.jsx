// Synthetic events in React are a system that wraps browser-native events into a cross-browser API.
// This allows events to work consistently across browsers

import React from "react";

const SyntheticEvent = () => {
  const onClickHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
};

export default SyntheticEvent;

// CheckBox
// Add More With CRUD
// Counter with Reducer
// List Data From Api with Fetch and axios

// Use Memo
// Use Callback
// Use Ref
// Use ForwardRef

// Micro Frontend
// Module Fedration
// WebPack

// Contxt API
// UseContext
// StopWatch
// promise and asyc Await
// useEffectLayout
