import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

const postsRow = [
  {
    id: 1,
    title: "Table 1",
    content:
      "Fire in the hole Corsair Privateer bilge water brig league me Buccaneer blow the man down hands. Plunder black jack salmagundi jolly boat provost Buccaneer lee careen scourge of the seven seas skysail. Walk the plank prow parley bilge yo-ho-ho lugsail execution dock belay clap of thunder hogshead.",
    content2: "Welcome to learning React!",
    content3: "Welcome to learning React!",
    content4: "Welcome to learning React!"
  },
  {
    id: 2,
    title: "Table 1",
    content:
      "Boatswain scallywag bring a spring upon her cable hempen halter barque boom rutters topgallant furl gaff. Topsail Spanish Main strike colors tender jolly boat scuttle Letter of Marque wherry capstan furl. Measured fer yer chains knave topmast nipperkin main sheet bilge rat Gold Road pillage handsomely quarterdeck.",
    content2: "Welcome to learning React!",
    content3: "Welcome to learning React!",
    content4: "Welcome to learning React!"
  },
  {
    id: 3,
    title: "Table 1",
    content:
      "Piracy hardtack loaded to the gunwalls Admiral of the Black case shot bilge water grog blossom grapple sheet man-of-war. Deadlights man-of-war run a rig six pounders Sail ho sutler red ensign sheet spanker Blimey. Bilged on her anchor Jolly Roger belay fathom hornswaggle nipperkin American Main loot chase guns spyglass.",
    content2: "Welcome to learning React!",
    content3: "Welcome to learning React!",
    content4: "Welcome to learning React!"
  },
  {
    id: 4,
    title: "Table 1",
    content:
      "Fire in the hole Corsair Privateer bilge water brig league me Buccaneer blow the man down hands. Plunder black jack salmagundi jolly boat provost Buccaneer lee careen scourge of the seven seas skysail. Walk the plank prow parley bilge yo-ho-ho lugsail execution dock belay clap of thunder hogshead.",
    content2: "Welcome to learning React!",
    content3: "Welcome to learning React!",
    content4: "Welcome to learning React!"
  }
];
const postHead = [
  { title: "Table 1" },
  { title: "Table 1" },
  { title: "Table 1" },
  { title: "Table 1" },
  { title: "Table 1" },
  { title: "Table 1" }
];
function searchFilter(search) {
  return function(x) {
    return x.content.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}
class ContractorsSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      showRowCondition: false,
      showRowFilter: false,
      showRowCard: false,
      showSearch: false,
      postsRow: postsRow,
      postHead: postHead,
      search: ""
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleMenu2 = this.toggleMenu2.bind(this);
    this.showRow = this.showRow.bind(this);
    this.showRowCard = this.showRowCard.bind(this);
    this.showRowFilter = this.showRowFilter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showSearch = this.showSearch.bind(this);
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
  }
  toggleMenu() {
    this.setState({ condition: true });
    this.setState({ showRowFilter: true });
  }
  toggleMenu2() {
    this.setState({ condition: false });
    this.setState({ showRowCondition: false });
    this.setState({ showRowFilter: false });
    this.setState({ showRowCard: false });
    this.setState({ showRowFilter: false });
    this.setState({ showSearch: false });
  }
  showRow() {
    this.setState({ showRowCondition: true });
  }
  showRowCard() {
    this.setState({ showRowFilter: false });
    this.setState({ showRowCard: true });
  }
  showRowFilter() {
    this.setState({ showRowCard: false });
    this.setState({ showRowFilter: true });
  }
  handleChange(e) {
    this.setState({ search: e.target.value });
  }
  showSearch() {
    this.setState({ showSearch: true });
    this.setState({ showRowFilter: false });
    this.setState({ showRowCard: false });
  }
  sortByPriceAsc() {
    this.setState(prevState => {
      this.state.postsRow.sort((a, b) => a.id - b.id);
      this.setState({ showRowFilter: false });
    });
  }
  sortByPriceDesc() {
    this.setState(prevState => {
      this.state.postsRow.sort((a, b) => b.id - a.id);
      this.setState({ showRowFilter: false });
    });
  }
  componentDidMount() {
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
  }

  render() {
    const { postsRow, postHead, search } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="table-responsive">
            <div className="row container-fluid above">
              <div className="col-6 text-left pt-3">
                <h5>Contractors Settings</h5>
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
                  <div className="col-2">{head.title}</div>
                ))}
              </div>

              <div className="col-12 p-0">
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
                {postsRow.filter(searchFilter(search)).map(row => (
                  <div
                    className="rowData  col-12"
                    key={row.id}
                    onMouseEnter={this.showRowHighlite}
                  >
                    <div className="col-2">
                      <div onClick={this.showRow}>{row.id}</div>
                    </div>
                    <div className="col-2">
                      <div onClick={this.showRow}>{row.title}</div>
                    </div>
                    <div className="col-2">
                      <div onClick={this.showRow}>{row.content}</div>
                    </div>
                    <div className="col-2">
                      <div onClick={this.showRow}>{row.content2}</div>
                    </div>
                    <div className="col-2">
                      <div onClick={this.showRow}>{row.content3}</div>
                    </div>
                    <div className="col-2">
                      <div onClick={this.showRow}>{row.content4}</div>
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

export default ContractorsSettings;
