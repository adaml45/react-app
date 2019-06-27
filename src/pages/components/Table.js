import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div className="table row">
        <div className="Header col-12">{this.props.Head}</div>
        <div className="col-12 p-0">{this.props.Body}</div>
      </div>
    );
  }
}

export default Table;
