import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../components/Table";
import AddUser from "./Add_Users";
import { Overlay } from "../components/Overlay";

const postsRow = [
  {
    id: 1,
    Project: "Project Name",
    Agent: "Steve",
    Type: "Admin"
  },
  {
    id: 2,
    Project: "Project Name",
    Agent: "Sam",
    Type: "Read Only"
  },
  {
    id: 3,
    Project: "Project Name",
    Agent: "Shawn",
    Type: "Prime Contractor"
  }
];
const postHead = [
  { title: "ID" },
  { title: "Project Name" },
  { title: "Agent" },
  { title: "Permission Type" },
  { title: "Status" }
];
function searchFilter(search) {
  return function(x) {
    return x.Agent.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }
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
      <div className="wrapper">
        <div className="table-responsive">
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

          <Table
            Head={postHead.map(head => (
              <div className="col-2" key={head.title}>
                {head.title}
              </div>
            ))}
            Body={postsRow.filter(searchFilter(search)).map(row => (
              <div className="rowData  col-12" key={row.id} id={row.id}>
                <div className="col-2">
                  <div>{row.id}</div>
                </div>
                <div className="col-2">
                  <Link
                    to={{
                      pathname: "/Users_Edit",
                      state: {
                        id: row.id,
                        project: row.Project,
                        agent: row.Agent,
                        type: row.Type
                      }
                    }}
                    id={row.id}
                  >
                    <div>{row.Project}</div>
                  </Link>
                </div>
                <div className="col-2">
                  <Link
                    to={{
                      pathname: "/Users_Edit",
                      state: {
                        id: row.id,
                        project: row.Project,
                        agent: row.Agent,
                        type: row.Type
                      }
                    }}
                  >
                    <div>{row.Agent}</div>
                  </Link>
                </div>
                <div className="col-2">
                  <div>{row.Type}</div>
                </div>
              </div>
            ))}
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

export default Users;
