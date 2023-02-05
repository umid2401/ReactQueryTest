import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const style = {
  textAlign: "center",
  color: "blue",
  fontSize: "30px",
};
const loadingStyle = {
  fontSize: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "red",
};
const styleDiv={
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  
}
export const ReactQueryPage = () => {
  const getData = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=2");
    return data;
  };
  const { isLoading, error, isError, data } = useQuery("data", getData);
  if (isLoading) {
    return <div style={loadingStyle}>Loading...</div>;
  }
  if (error) {
    return <div style={style}>Page not found</div>;
  }
  return (
    <div style={styleDiv}>
      {data.data.map((item, index) => (
        <div key={index} >
          <img src={item.avatar} />
          <p>{item.first_name}</p>
          <h4>{item.email}</h4>

          
        </div>
      ))}
    </div>
  );
};
