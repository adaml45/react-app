import React, { Component } from "react";
import Accordion from "../../components/Accordion";
import Table from "../../components/Table";
import Select from "../../components/Select";
import Footer from "../../components/Footer";

const postsActivity = [
  {
    id: 1,
    Name: "Pre-Construction"
  },
  {
    id: 2,
    Name: "Power Supply Installation"
  },
  {
    id: 3,
    Name: "Aerial Construction"
  },
  {
    id: 4,
    Name: "Inderground Construction"
  },
  {
    id: 5,
    Name: "Disctribution Upgrade"
  },
  {
    id: 6,
    Name: "Fiber Splicing and Node Activation"
  },
  {
    id: 7,
    Name: "Sweep and Certification"
  },
  {
    id: 8,
    Name: "Post Construction"
  }
];
const postsActivitesHead = [
  { title: "ID" },
  { title: "Name" },
  { title: "Days From" },
  { title: "Days To" },
  { title: "Billable?" },
  { title: "Price" }
];
const postsActivites = [
  {
    id: 14,
    cat: 1,
    Name: "Railroad Crossing Licenses Submitted",
    From: "-89",
    To: "-85",
    Billable: "Yes",
    Price: "N/A"
  },
  {
    id: 13,
    cat: 1,
    Name: "Pole Attachment Permits Submitted",
    From: "-89",
    To: "-85",
    Billable: "Yes",
    Price: "N/A"
  },
  {
    id: 12,
    cat: 2,
    Name: "Permitting Completed By",
    From: "-89",
    To: "-85",
    Billable: "No",
    Price: "N/A"
  },
  {
    id: 11,
    cat: 3,
    Name: "Door Hangers Placed",
    From: "-89",
    To: "-85",
    Billable: "No",
    Price: "N/A"
  }
];
const postStatus = [{ title: "Yes" }, { title: "No" }];

class ActivitySettings extends Component {
  state = {
    postsActivity: postsActivity,
    postsActivitesHead: postsActivitesHead,
    postsActivites: postsActivites,
    postStatus: postStatus,
    selectStatus: ""
  };
  selectStatusClick = (id, e) => {
    const index = this.state.postsActivites.findIndex(row => {
      return row.id === id;
    });
    const row = Object.assign([], this.state.postsActivites[index]);
    row.Billable = e.target.id;
    const postsActivites = Object.assign([], this.state.postsActivites);
    postsActivites[index] = row;
    this.setState({ postsActivites: postsActivites });

    this.setState({ active: true });
    this.setState({ show: true });
  };
  changeName(id, e) {
    const index = this.state.postsActivites.findIndex(row => {
      return row.id === id;
    });
    const row = Object.assign([], this.state.postsActivites[index]);
    row.Name = e.target.value;
    const postsActivites = Object.assign([], this.state.postsActivites);
    postsActivites[index] = row;
    this.setState({ postsActivites: postsActivites });
    this.setState({ show: true });
  }
  changeFrom = (id, e) => {
    const index = this.state.postsActivites.findIndex(row => {
      return row.id === id;
    });
    const row = Object.assign([], this.state.postsActivites[index]);
    row.From = e.target.value;
    const postsActivites = Object.assign([], this.state.postsActivites);
    postsActivites[index] = row;
    this.setState({ postsActivites: postsActivites });
    this.setState({ show: true });
  };
  changeTo = (id, e) => {
    const index = this.state.postsActivites.findIndex(row => {
      return row.id === id;
    });
    const row = Object.assign([], this.state.postsActivites[index]);
    row.To = e.target.value;
    const postsActivites = Object.assign([], this.state.postsActivites);
    postsActivites[index] = row;
    this.setState({ postsActivites: postsActivites });
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
    const {
      postsActivity,
      postsActivitesHead,
      postsActivites,
      postStatus
    } = this.state;
    return (
      <div className="wrapper  " id="wrapper">
        <div className="row container-fluid above">
          <div className="col-6 text-left pt-3">
            <h5>Activity Settings</h5>
          </div>
        </div>
        {postsActivity.map(Activity => (
          <Accordion key={Activity.id} title={Activity.Name}>
            {" "}
            <Table
              Head={postsActivitesHead.map(head => (
                <div
                  className={head.title === "ID" ? "col-auto" : "col-2"}
                  key={head.title}
                  style={{
                    display: head.title === "ID" ? "None" : "inline-block",
                    textAlign: head.title === "Name" ? "left" : "center"
                  }}
                >
                  {head.title}
                </div>
              ))}
              Body={postsActivites.map((Activites, index) =>
                Activity.id === Activites.cat ? (
                  <div
                    className="rowData col-12"
                    key={Activites.id}
                    id={Activites.id}
                  >
                    <div className="col-2 rowDataWithOverflow">
                      <textarea
                        value={Activites.Name}
                        class="form-control mb-2 form-control-sm"
                        onChange={this.changeName.bind(this, Activites.id)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        value={Activites.From}
                        class="form-control mb-2 form-control-sm text-center"
                        onChange={this.changeFrom.bind(this, Activites.id)}
                      />
                    </div>
                    <div className="col-2">
                      <input
                        type="number"
                        value={Activites.To}
                        class="form-control mb-2 form-control-sm text-center"
                        onChange={this.changeTo.bind(this, Activites.id)}
                      />
                    </div>
                    <div className="col-2 text-center">
                      <Select
                        selectStatus={
                          this.state.selectStatus
                            ? this.state.selectStatus
                            : Activites.Billable
                        }
                        selectItems={postStatus.map(status => (
                          <div
                            className={
                              status.title === Activites.Billable
                                ? " active dropdown-item"
                                : status.title === this.state.selectStatus
                                ? " activeSelect dropdown-item"
                                : "dropdown-item"
                            }
                            key={status.title}
                            id={status.title}
                            onClick={this.selectStatusClick.bind(
                              this,
                              Activites.id
                            )}
                          >
                            {status.title}
                          </div>
                        ))}
                      />
                    </div>
                    <div className="col-2 text-center">
                      <div>{Activites.Price}</div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            />
          </Accordion>
        ))}
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

export default ActivitySettings;
