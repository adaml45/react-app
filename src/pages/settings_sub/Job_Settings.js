import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const postsRow = [
  {
    id: 1,
    title: "Nodes",
    linkName: "Alias Names",
    link: "Alias_Type",
    linkName2: "Community List",
    link2: "Community_List",
    linkName3: "Region List",
    link3: "Region_List",
    linkName4: "Node Type",
    link4: "Node_Type",
    linkName5: "Node Status List",
    link5: "Node_Status_List"
  }
];

class JobSettings extends Component {
  state = {
    postsRow: postsRow
  };
  render() {
    const { postsRow } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="row container-fluid mt-2 ">
            <div className="col-12 text-left pt-3">
              <h5>Job Settings</h5>
            </div>
            {postsRow.map(row => (
              <Cards
                key={row.id}
                title={row.title}
                link={
                  <div>
                    <li className="list-group-item">
                      <Link to={row.link}>{row.linkName}</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to={row.link2}>{row.linkName2}</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to={row.link3}>{row.linkName3}</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to={row.link4}>{row.linkName4}</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to={row.link5}>{row.linkName5}</Link>
                    </li>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default JobSettings;
