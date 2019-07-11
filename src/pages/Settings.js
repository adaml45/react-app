import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cards from "./components/Cards";

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
  },
  {
    id: 2,
    title: "Permits",
    linkName: "Permit Vendors",
    link: "Permit_Vendors",
    linkName2: "Permit Type",
    link2: "Permit_Type"
  },
  {
    id: 3,
    title: "Gigs",
    linkName: "Gig Type",
    link: "Gig_Type"
  },
  {
    id: 4,
    title: "Materials",
    linkName: "UOM",
    link: "UOM",
    linkName2: "Material Groups",
    link2: "Material_Groups",
    linkName3: "Materials and Parts",
    link3: "Material_Parts",
    linkName4: "Material Order Vendors",
    link4: "Material_Order_Vendors"
  },
  {
    id: 5,
    title: "Contractors",
    linkName: "Prime-Contractor",
    link: "Prime_Contractors",
    linkName2: "Subcontractor",
    link2: "Subcontractors",
    linkName3: "Crew",
    link3: "Crews"
  },
  {
    id: 6,
    title: "Permissions",
    linkName: "Users",
    link: "Users",
    linkName2: "Roles/Permissions",
    link2: "Permissions_Settings"
  },
  {
    id: 7,
    title: "Passings",
    linkName: "Building Types",
    link: "Building_Types"
  },
  {
    id: 8,
    title: "Activities",
    linkName: "Activity Settings",
    link: "Activity_Settings"
  }
];

class Settings extends Component {
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
              <h5>Settings</h5>
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

export default Settings;
