import { Component } from "react";
// render props=> sharing data in between components
//  whose value is function
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  render() {
    return this.props.render({
      count: this.state.count,
      increment: this.increment,
      decrement: this.decrement,
    });
  }
}

export default Counter;
