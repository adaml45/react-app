import React, { Component } from "react";
import { string, object } from "prop-types";
import {Chart} from "frappe-charts/dist/frappe-charts.min.esm"

class Graph extends Component {
  componentDidMount() {
    const { title, data, type, barOptions, colors=['#e0e3ea','#3d495a','#7fb94b','orange','#495971','#607D8B'],animations=false, height = 300, onSelect, ...rest } = this.props;
    this.graph = new Chart(this.chart, {
      title,
      data,
      type,
      barOptions: {
        stacked: 1  
      },
      colors,
      animations,
      height,
      ...rest
    });
  }
  render() {
    return <div ref={chart => (this.chart = chart)} />;
  }
}

export default Graph;

Graph.propTypes = {
  type: string.isRequired,
  data: object.isRequired
};