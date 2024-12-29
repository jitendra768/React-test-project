import React, { useEffect, useState } from "react";

const CleanupFUnction = () => {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);
    console.log("🚀 ~ useEffect ~ intervalId:", intervalId)

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <p>second:{second}</p>
    </div>
  );
};

export default CleanupFUnction;
