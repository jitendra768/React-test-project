import axios from "axios";
import React, { useEffect } from "react";

const AxiosData = () => {
  const [data, setData] = React.useState([]);

  const axiosData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axiosData();
  }, []);

  return (
    <div>
      <h1>Users Data </h1>
      <ul>
        {data.map((user, i) => (
          <div key={i} style={{ display: "flex", margin: "10px", gap: "10px" }}>
            <li >{user.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AxiosData;
