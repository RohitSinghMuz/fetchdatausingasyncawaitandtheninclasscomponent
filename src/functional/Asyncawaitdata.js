import React, { useEffect, useState } from "react";

const Asyncawaitdata = () => {
  const [data, setdata] = useState([]);
  const getdata = async () => {
    try {
      const responsedata = await fetch("https://fakestoreapi.com/products");
      const getdata = await responsedata.json();
      setdata(getdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [data]);
  console.log(data, data);
  return (
    <>
      <h2>Fetch data</h2>
      <h2>Then method</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          margin: "5px auto",
        }}
      >
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: "300px",
                hight: "250px",
                margin: "10px",
                border: "1px solid grey",
              }}
            >
              <img
                src={item.image}
                width="150px"
                height="150px"
                alt="srcimage"
              />
              <h5>{item.category}</h5>
              <p>{item.description}</p>
              <p>price:{item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Asyncawaitdata;
