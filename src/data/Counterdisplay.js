import { Component } from "react";
import Counter from "./Counter";

class Counterdisplay extends Component {
  render() {
    return (
      <Counter
        render={({ count, increment, decrement }) => (
          <div>
            <button
              style={{ padding: "10px 20px", margin: "10px" }}
              onClick={decrement}
            >
              -
            </button>
            <span style={{ padding: "10px 20px", margin: "10px" }}>
              {count}
            </span>
            <button
              style={{ padding: "10px 20px", margin: "10px" }}
              onClick={increment}
            >
              +
            </button>
          </div>
        )}
      />
    );
  }
}
export default Counterdisplay;
