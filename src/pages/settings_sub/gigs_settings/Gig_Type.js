import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/Table";
import Select from "../../components/Select";
import AddGigType from "./Add_Gig_Type";
import Footer from "../../components/Footer";
import { Overlay } from "../../components/Overlay";
const postsRow = [
  {
    id: 1,
    Name: "Ground Restoration",
    Status: "Active"
  },
  {
    id: 2,
    Name: "Not Built to Design",
    Status: "In-Active"
  }
];
const postHead = [{ title: "ID" }, { title: "Name" }, { title: "Status" }];
const postStatus = [{ title: "Active" }, { title: "In-Active" }];
function searchFilter(search) {
  return function(x) {
    return x.Name.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}
class GigType extends Component {
  state = {
    active: false,
    show: false,
    condition: false,
    overlay: false,
    showSearch: false,
    postHead: postHead,
    postsRow: postsRow,
    postStatus: postStatus,
    search: "",
    selectStatus: ""
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
  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  showSearch = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };
  showRow = () => {
    this.setState({ showRowCondition: true });
  };
  showRowFilter = () => {
    this.setState({ showRowCard: false });
    this.setState({ showRowFilter: true });
  };
  selectStatusClick = e => {
    this.setState({ selectStatus: e.target.id });
    this.setState({ active: true });
    this.setState({ show: true });
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
  cancelFooter = () => {
    this.setState({ show: false });
  };
  saveClick = () => {
    this.setState({ Succsaved: true });
    setTimeout(() => {
      this.setState({
        Succsaved: false
      });
      this.setState({
        show: false
      });
    }, 3000);
  };
  render() {
    const { postHead, postsRow, search, postStatus } = this.state;
    return (
      <div className="wrapper" id="wrapper">
        <div className="row container-fluid above">
          <div className="col-6 text-left pt-3">
            <h5>Gig Type</h5>
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
              onMouseLeave={this.showSearch}
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
                className={head.title === "ID" ? "col-auto" : "col-2"}
                key={head.title}
                style={{
                  display: head.title === "ID" ? "None" : "inline-block"
                }}
              >
                {head.title}
              </div>
            ))}
            Body={postsRow.filter(searchFilter(search)).map(row => (
              <div className="rowData col-12" key={row.id} id={row.id}>
                <div className="col-2">
                  <div>{row.Name}</div>
                </div>
                <div className="col-2">
                  <Select
                    selectStatus={
                      this.state.selectStatus
                        ? this.state.selectStatus
                        : row.Status
                    }
                    selectItems={postStatus.map(status => (
                      <Status
                        status={status.title}
                        className={
                          status.title === row.Status
                            ? " dropdown-item"
                            : status.title === this.state.selectStatus
                            ? " activeSelect dropdown-item"
                            : "dropdown-item"
                        }
                        key={status.title}
                        id={status.title}
                        onClick={this.selectStatusClick}
                      >
                        {status.title}
                      </Status>
                    ))}
                  />
                </div>
              </div>
            ))}
          />
        </div>
        <div className={this.state.showAddAgent ? "show" : "hide"}>
          <AddGigType
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
        <div className={this.state.show ? "show" : "hide"}>
          <Footer
            sucessfulSaveFooterColor={this.state.Succsaved ? "greenBgd" : ""}
            sucessfulSave={this.state.Succsaved ? "show" : "hide"}
            footerBtns={this.state.Succsaved ? "hide" : "show"}
            Cancel={<span onClick={this.cancelFooter}> Cancel</span>}
            Save={<span onClick={this.saveClick}> Save</span>}
          />
        </div>
      </div>
    );
  }
}
export const Status = styled.p`
  color: var(--White) !important;
  background-color: ${props =>
    props.status === "Active" ? "#8BC34A !important" : "#F44336 !important"};
  text-align: center;
  &:hover {
    color: ${props =>
      props.status === "Active" ? "#8BC34A !important" : "#F44336 !important"};
    background-color: var(--White) !important;
  }
`;
export default GigType;
