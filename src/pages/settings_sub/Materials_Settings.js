import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

const postsRow = [
  {
    id: 1,
    title: "Materials",
    linkName: "UOM",
    link: "UOM",
    linkName2: "Material Groups",
    link2: "Material_Groups",
    linkName3: "Materials and Parts",
    link3: "Material_Parts",
    linkName4: "Material Order Vendors",
    link4: "Material_Order_Vendors"
  }
];

class MaterialsSettings extends Component {
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
              <h5>Materials Settings</h5>
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

export default MaterialsSettings;
