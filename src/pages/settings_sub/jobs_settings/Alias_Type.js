import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/Table";
import Select from "../../components/Select";
import Footer from "../../components/Footer";
import { Overlay } from "../../components/Overlay";
const postsRow = [
  {
    id: 1,
    Type: "Node",
    Des:
      "This will be the main way that you track activities. Oftentimes otherwise known as Jobs, Projects, Etc.",
    Text: "",
    Plural: "",
    Status: "Active"
  }
];
const postHead = [
  { title: "ID" },
  { title: "Alias Type" },
  { title: "Description" },
  { title: "Alias Text" },
  { title: "Alias Plural" },
  { title: "Status" }
];
const postStatus = [{ title: "Active" }, { title: "In-Active" }];
function searchFilter(search) {
  return function(x) {
    return x.Type.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}
class Alias_Type extends Component {
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
  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  showSearch = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };
  selectStatusClick = e => {
    this.setState({ selectStatus: e.target.id });
    this.setState({ active: true });
    this.setState({ show: true });
  };
  changeText = (id, e) => {
    const index = this.state.postsRow.findIndex(row => {
      return row.id === id;
    });
    const row = Object.assign([], this.state.postsRow[index]);
    row.Text = e.target.value;
    const postsRow = Object.assign([], this.state.postsRow);
    postsRow[index] = row;
    this.setState({ postsRow: postsRow });
    this.setState({ show: true });
  };
  changePlural = (id, e) => {
    const index = this.state.postsRow.findIndex(row => {
      return row.id === id;
    });
    const row = Object.assign([], this.state.postsRow[index]);
    row.Plural = e.target.value;
    const postsRow = Object.assign([], this.state.postsRow);
    postsRow[index] = row;
    this.setState({ postsRow: postsRow });
    this.setState({ show: true });
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
            <h5>Alias Names</h5>
          </div>
          <div className="col-auto text-right innerPageNav">
            <div style={{ width: "auto" }}>
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
                  <div>{row.Type}</div>
                </div>
                <div className="col-2 rowDataWithOverflow">
                  <div>{row.Des}</div>
                </div>
                <div className="col-2">
                  <input
                    id={row.id}
                    type="text"
                    value={row.Text}
                    placeholder="Alias Text"
                    className="form-control form-control-sm"
                    onChange={this.changeText.bind(this, row.id)}
                  />
                </div>
                <div className="col-2">
                  <input
                    id={row.id}
                    type="text"
                    value={row.Plural}
                    placeholder="Alias Plural"
                    className="form-control form-control-sm"
                    onChange={this.changePlural.bind(this, row.id)}
                  />
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
export default Alias_Type;
