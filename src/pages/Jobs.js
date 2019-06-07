import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

const postsRow = [
  {
    id: 1,
    Job_Type: "Node",
    Job_Name: "PM001",
    Community: "Plaza Midwood ",
    Firing_Order: "1",
    Job_Location: "1350 Central Ave, Charlotte NC  ",
    Hub_Location: "1350 Central Ave, Charlotte NC ",
    Design_Complete: "5/6/2019"
  },
  {
    id: 2,
    Job_Type: "Strand",
    Job_Name: "PM002",
    Community: "Steel Creek",
    Firing_Order: "2",
    Job_Location: "1350 Central Ave, Charlotte NC  ",
    Hub_Location: "1350 Central Ave, Charlotte NC ",
    Design_Complete: "5/6/2019"
  },
  {
    id: 3,
    Job_Type: "Aerial Fiber",
    Job_Name: "PM003",
    Community: "Ballantyne",
    Firing_Order: "3",
    Job_Location: "1350 Central Ave, Charlotte NC  ",
    Hub_Location: "1350 Central Ave, Charlotte NC ",
    Design_Complete: "5/6/2019"
  },
  {
    id: 4,
    Job_Type: "UG Coax",
    Job_Name: "PM004",
    Community: "Concord",
    Firing_Order: "4",
    Job_Location: "1350 Central Ave, Charlotte NC  ",
    Hub_Location: "1350 Central Ave, Charlotte NC ",
    Design_Complete: "5/6/2019"
  }
];
const postHead = [
  { title: "Jobs Type" },
  { title: "Job Name" },
  { title: "Community" },
  { title: "Firing Order" },
  { title: "Job Location" },
  { title: "HUB Location" },
  { title: "Design Completion" }
];
function searchFilter(search) {
  return function(x) {
    return (
      x.Job_Name.toLowerCase().includes(search.toLowerCase()) ||
      x.Community.toLowerCase().includes(search.toLowerCase()) ||
      !search
    );
  };
}
class Jobs extends Component {
  state = {
    condition: false,
    showRowCondition: false,
    showRowFilter: false,
    showRowCard: false,
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
    this.setState({ showRowCard: false });
    this.setState({ showRowFilter: false });
    this.setState({ showSearch: false });
  };
  showRow = () => {
    this.setState({ showRowCondition: true });
  };
  showRowCard = () => {
    this.setState({ showRowFilter: false });
    this.setState({ showRowCard: true });
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
  componentDidMount = () => {
    $(function() {
      $(".tableToggleCard").click(function() {
        $(".table .Header").addClass("hide");
        $(".rowData")
          .addClass("rowDataCard")
          .addClass("col-lg-3");
        $(".table").addClass("rowDataCardTable");
      });
      $(".tableToggleRow").click(function() {
        $(".table .Header").removeClass("hide");
        $(".rowData")
          .removeClass("rowDataCard")
          .removeClass("col-lg-3");
        $(".table").removeClass("rowDataCardTable");
      });
      $(".rowData > div div").click(function() {
        $(this)
          .closest(".rowData")
          .find("div div")
          .addClass("showContent");
        $(this)
          .closest(".rowData")
          .addClass("rowDataCard rowDataCardRowClick ");
      });
      $(".rowData").hover(
        function() {
          $(this).addClass("highlite");
        },
        function() {
          $(this).removeClass("highlite");
        }
      );
      $(".closeCard").on("click", function() {
        if ($(".rowData").hasClass("rowDataCard col-lg-3")) {
          $(".rowData").removeClass("rowDataCardRowClick ");
          $(".rowData div div").removeClass("showContent");
        } else {
          $(".rowData")
            .removeClass("rowDataCard rowDataCardRowClick ")
            .removeClass("col-lg-3");
          $(".rowData div div").removeClass("showContent");
        }
      });
    });
  };

  render() {
    const { postsRow, postHead, search } = this.state;

    return (
      <div>
        <div
          id="mainNavOverlay"
          className={this.state.showRowCondition ? "show" : "hide"}
        />
        <div className="wrapper">
          <div className="table-responsive">
            <div className="row container-fluid above">
              <div className="col-6 text-left pt-3">
                <h5>Jobs</h5>
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
                    icon="grip-horizontal"
                    size="lg"
                    color="#ddd"
                    onMouseEnter={this.showRowCard}
                  />
                </div>
              </div>
              <div className="col-12 text-right">
                <div
                  className={
                    this.state.showRowCard
                      ? "card tableToggleWrap"
                      : "card tableToggleWrap toggled"
                  }
                  onMouseLeave={this.toggleMenu2}
                >
                  <div className="card-body">
                    <ul>
                      <li
                        className="tableToggleCard"
                        onClick={this.toggleMenu2}
                      >
                        <FontAwesomeIcon
                          icon="th-large"
                          color="#495971"
                          size="xs"
                        />{" "}
                        Card
                      </li>
                      <li className="tableToggleRow" onClick={this.toggleMenu2}>
                        <FontAwesomeIcon
                          icon="table"
                          color="#495971"
                          size="xs"
                        />{" "}
                        Table
                      </li>
                    </ul>
                  </div>
                </div>

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
                          size="md"
                        />{" "}
                        ASC
                      </li>
                      <li className="" onClick={this.sortByPriceDesc}>
                        <FontAwesomeIcon
                          icon="sort-alpha-up"
                          color="#495971"
                          size="md"
                        />{" "}
                        DESC
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="table row">
              <div className="Header col-12">
                {postHead.map(head => (
                  <div className="col-auto" style={{ maxWidth: "14%" }}>
                    {head.title}
                  </div>
                ))}
              </div>

              <div className="col-12 p-0 jobs_tBody">
                <span
                  className={
                    this.state.showRowCondition
                      ? "closeCard"
                      : "closeCard toggled"
                  }
                  onClick={this.toggleMenu2}
                >
                  <FontAwesomeIcon icon="times" size="xs" />{" "}
                </span>

                {postsRow.filter(searchFilter(search)).map((value, index) => (
                  <div className="rowData  col-12" key={value}>
                    <div className="col-auto">
                      <div onClick={this.showRow}>
                        <span
                          className={
                            this.state.showRowCondition
                              ? " btn editBtn show "
                              : " btn edit hide "
                          }
                        >
                          <Link to={"/edit_Job"}>
                            <FontAwesomeIcon icon="edit" size="md" />
                          </Link>
                        </span>
                        {value.Job_Type}
                      </div>
                    </div>
                    <div className="col-auto">
                      <div onClick={this.showRow}>{value.Job_Name}</div>
                    </div>
                    <div className="col-auto">
                      <div onClick={this.showRow}>{value.Community}</div>
                    </div>
                    <div className="col-auto">
                      <div onClick={this.showRow}>{value.Firing_Order}</div>
                    </div>
                    <div className="col-auto">
                      <div onClick={this.showRow}>{value.Job_Location}</div>
                    </div>
                    <div className="col-auto">
                      <div onClick={this.showRow}>{value.Hub_Location}</div>
                    </div>
                    <div className="col-auto">
                      <div onClick={this.showRow}>{value.Design_Complete}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
