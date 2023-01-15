import React, { Component } from "react";

class Thenclass extends Component {
  state = {
    data: [],
  };
  getdata = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((getdata) => this.setState({ data: getdata }));

    try {
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getdata();
  }

  render() {
    console.log(this.state.data, "data");
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
export default Thenclass;
