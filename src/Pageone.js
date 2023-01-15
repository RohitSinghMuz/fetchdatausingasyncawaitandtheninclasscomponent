import React, { Component } from "react";

export default class Pageone extends Component {
  state = {
    count: 0,
  };

  incrementcount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let mycityname = "Hyderbad";
    console.log(mycityname);
    return (
      <div style={{ width: "30%", margin: "10px auto" }}>
        <button onClick={this.incrementcount}>Increment</button>
        <h2>{mycityname}</h2>
        <h2>{this.state.count}</h2>
        <button>Decrement</button>
      </div>
    );
  }
}
