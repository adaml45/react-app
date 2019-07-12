import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../components/Table";
import AddUser from "./Add_Users";
import { Overlay } from "../components/Overlay";
import UserData from "./DataCarrier.js";

const postsRow = [
  {
    id: 1,
    Project: "Project Name",
    User: "Steve",
    Email: "steve@email.com",
    Type: "Admin",
    Status: "Active"
  },
  {
    id: 2,
    Project: "Project Name",
    User: "Sam",
    Email: "sam@email.com",
    Type: "Read Only",
    Status: "Active"
  },
  {
    id: 3,
    Project: "Project Name",
    User: "Shawn",
    Email: "shawn@email.com",
    Type: "Prime Contractor",
    Status: "In-Active"
  }
];
const postHead = [
  { title: "ID" },
  { title: "Project Name" },
  { title: "User" },
  { title: "Email" },
  { title: "Permission Type" },
  { title: "Status" }
];
function searchFilter(search) {
  return function(x) {
    return x.User.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}

class Users extends Component {
  state = {
    condition: false,
    overlay: false,
    showAddAgent: false,
    showRowCondition: false,
    showRowFilter: false,
    showSearch: false,
    postsRow: postsRow,
    postHead: postHead,
    search: ""
  };

  toggleMenu = () => {
    this.setState({ condition: true });
    this.setState({ showRowFilter: true });
  };
  toggleMenu2 = () => {
    this.setState({ condition: false });
    this.setState({ showRowCondition: false });
    this.setState({ showRowFilter: false });
    this.setState({ showRowFilter: false });
    this.setState({ showSearch: false });
  };
  toggleAddAgent = () => {
    this.setState({ showAddAgent: true });
    this.setState({ overlay: true });
  };
  close = () => {
    this.setState({ showAddAgent: false });
    this.setState({ overlay: false });
  };
  showRow = () => {
    this.setState({ showRowCondition: true });
  };
  showRowFilter = () => {
    this.setState({ showRowCard: false });
    this.setState({ showRowFilter: true });
  };
  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  showSearch = () => {
    this.setState({ showSearch: true });
    this.setState({ showRowFilter: false });
    this.setState({ showRowCard: false });
  };
  sortByPriceAsc = () => {
    this.setState(prevState => {
      this.state.postsRow.sort((a, b) => a.id - b.id);
      this.setState({ showRowFilter: false });
    });
  };
  sortByPriceDesc = () => {
    this.setState(prevState => {
      this.state.postsRow.sort((a, b) => b.id - a.id);
      this.setState({ showRowFilter: false });
    });
  };

  render() {
    const { postsRow, postHead, search } = this.state;
    return (
      <div className="wrapper" id="wrapper">
        <div className="row container-fluid above">
          <div className="col-6 text-left pt-3">
            <h5>Users</h5>
          </div>
          <div className="col-6 text-right innerPageNav">
            <div className="">
              <FontAwesomeIcon
                icon="search"
                size="lg"
                color="#ddd"
                onMouseEnter={this.showSearch}
              />
            </div>
            <input
              type="text"
              className={
                this.state.showSearch
                  ? "form-control filterInput show"
                  : "form-control filterInput hide"
              }
              onChange={this.handleChange}
              onMouseLeave={this.toggleMenu2}
              placeholder="Search..."
              value={search}
            />
            <div className="">
              <FontAwesomeIcon
                icon="sort-amount-down"
                size="lg"
                color="#ddd"
                onMouseEnter={this.showRowFilter}
              />
            </div>
            <div className="">
              <FontAwesomeIcon
                icon="plus"
                size="lg"
                color="#495971"
                onClick={this.toggleAddAgent}
              />
            </div>
          </div>
          <div className="col-12 text-right">
            <div
              className={
                this.state.showRowFilter
                  ? "card filter tableToggleWrap"
                  : "card filter tableToggleWrap toggled"
              }
              onMouseLeave={this.toggleMenu2}
            >
              <div className="card-body">
                <ul>
                  <li className="" onClick={this.sortByPriceAsc}>
                    <FontAwesomeIcon
                      icon="sort-alpha-down"
                      color="#495971"
                      size="1x"
                    />{" "}
                    ASC
                  </li>
                  <li className="" onClick={this.sortByPriceDesc}>
                    <FontAwesomeIcon
                      icon="sort-alpha-up"
                      color="#495971"
                      size="1x"
                    />{" "}
                    DESC
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <Table
            Head={postHead.map(head => (
                <div
                    className={head.title === "ID" ? "col-1" : "col-2"}
                    key={head.title}
                    style={{
                        textAlign: head.title === "Status" ? "center" : "left"
                    }}
                >
                    {head.title}
                </div>
            ))}
            Body={<UserData />}


            //        {postsRow.filter(searchFilter(search)).map(row => (
            //  <Link
            //    to={{
            //      pathname: "/Users_Edit",
            //      state: {
            //        id: row.id,
            //        project: row.Project,
            //        user: row.User,
            //        email: row.Email,
            //        type: row.Type,
            //        status: row.Status
            //      }
            //    }}
            //  >
            //    <div className="rowData  col-12" key={row.id} id={row.id}>
            //      <div className="col-1">
            //        <div>{row.id}</div>
            //      </div>
            //      <div className="col-2">
            //        <div>{row.Project}</div>
            //      </div>
            //      <div className="col-2">
            //        <div>{row.User}</div>
            //      </div>
            //      <div className="col-2">
            //        <div>{row.Email}</div>
            //      </div>
            //      <div className="col-2">
            //        <div>{row.Type}</div>
            //      </div>
            //      <div className="col-2">
            //        <Status status={row.Status} className="status">
            //          {row.Status}
            //        </Status>
            //      </div>
            //    </div>
            //  </Link>
            //))}
          />
        </div>
        <div className={this.state.showAddAgent ? "show" : "hide"}>
          <AddUser
            close={
              <div className="closeCard" onClick={this.close}>
                {" "}
                X{" "}
              </div>
            }
          />
        </div>
        <Overlay
          topNavOverlay
          id="mainNavOverlay"
          className={this.state.overlay ? "show" : "hide"}
        />
      </div>
    );
  }
}
export const Status = styled.div`
  color: var(--White);
  background-color: ${props =>
    props.status === "Active" ? "#8BC34A" : "#F44336"};
  text-align: center;
`;

export default Users;
