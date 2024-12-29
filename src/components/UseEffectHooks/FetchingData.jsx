import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((Error) => console.log(Error));
  }, []);
  return (
    <div style={{display:'flex', gap:'10px', margin:'10px'}}>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data</p>
      )}
    </div>
  );
};

export default FetchingData;
