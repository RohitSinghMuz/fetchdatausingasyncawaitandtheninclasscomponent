import React, { Component } from "react";

class Asyncawaitclass extends Component {
  state = {
    data: [],
  };
  getdata = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const getrespnonsedata = await response.json();

    this.setState({ data: getrespnonsedata });

    try {
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getdata();
  }

  render() {
    // console.log(this.state.data, "data");
    return (
      <>
        <h2>fetch data using class component using then method</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {this.state.data?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "300px",
                  heght: "250x",
                  margin: "10px auto",
                  border: "1px solid grey",
                }}
              >
                <img
                  src={item.image}
                  alt="srcimage"
                  width="250x"
                  height="250x"
                />
                <p>{item.title}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Asyncawaitclass;
