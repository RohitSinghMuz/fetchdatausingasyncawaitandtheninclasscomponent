import React, { Component } from "react";

export default class Todoclass extends Component {
  state = {
    text: "",
    data: [],
    iseditdata: null,
  };

  adddata = () => {
    let arr = {
      text: this.state.text,
    };
    let getalldata = [...this.state.data, arr];
    this.setState({
      data: getalldata,
      text: "",
    });
  };
  deleteitem = (idx) => {
    const deletedata = this.state.data?.filter((item,
         index) => {
      return idx !== index;
    });
    this.setState({
      data: deletedata,
    });
  };
  Editdatafun = (obj, idx) => {
    this.setState({
      iseditdata: idx,
      text: obj.text,
    });
  };
  AddEditDatafun = () => {
    const tempdata = [...this.state.data];
    tempdata[this.state.iseditdata].text = this.state.text;
    this.setState({
      text: "",
    });
  };
  render() {
    console.log(this.state.data, "data");
    return (
      <>
        <div style={{ width: "30%", margin: "10px auto" }}>
          <h2>Todoclass</h2>
          <input
            type="text"
            placeholder="Enter Text"
            style={{ width: "300px", padding: "10px 20px", margin: "10px" }}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button
            onClick={this.adddata}
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "green",
            }}
          >
            Addtext
          </button>
          <button
            onClick={this.AddEditDatafun}
            style={{
              padding: "10px 20px",
              margin: "10px",
              backgroundColor: "green",
            }}
          >
            AddEditData
          </button>

          {this.state.data?.map((item, idx) => {
            return (
              <div key={idx}>
                <h2 onClick={() => this.deleteitem(idx)}>Delete</h2>
                <h2>{item.text}</h2>
                <h2 onClick={() => this.Editdatafun(item, idx)}>Editdata</h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
