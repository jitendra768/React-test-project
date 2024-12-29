import React, { useEffect, useState } from "react";

const FetchDataa = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (i) => {
    // const newData = [...data]
    // newData.splice(i,1)
    // setData(newData)
    const filterData = data.filter((_, index) => index !== i);
    setData(filterData);
  };

  return (
    <div>
      <h2>List Data With Fetch</h2>
      <ul>
        {data &&
          data.map((item, i) => (
            <div  key={i} style={{ display: "flex", gap: "10px", margin: "10px" }}>
              <li>{item.name}</li>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default FetchDataa;
