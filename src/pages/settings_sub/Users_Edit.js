import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import Select from "../components/Select";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const postStatus = [{ title: "Active" }, { title: "In-Active" }];
const postType = [
  {
    Type: "Admin"
  },
  {
    Type: "Manager"
  },
  {
    Type: "Client"
  },
  {
    Type: "Client No Edit"
  },
  {
    Type: "PRG Employee"
  },
  {
    Type: "Read Only"
  },
  {
    Type: "Full View"
  },
  {
    Type: "Accounting"
  },
  {
    Type: "Prime Contractor"
  },
  {
    Type: "Contractor"
  },
  {
    id: 6,
    Type: "Contractor View",
    Discription: "No Dashboard"
  }
];
class UserEdit extends Component {
  state = {
    active: false,
    show: false,
    Succsaved: false,
    postStatus: postStatus,
    postType: postType,
    selectType: "",
    selectStatus: ""
  };

  componentDidMount() {
    const Agent = props => {
      let i = this.props.location.state.id;
      let u = this.props.location.state.user;
      let e = this.props.location.state.email;
      let p = this.props.location.state.project;
      let t = this.props.location.state.type;
      let s = this.props.location.state.status;
      this.setState({ i, u, t, p, s, e });
    };
    Agent();
  }
  selectTypeClick = e => {
    this.setState({ selectType: e.target.id });
    this.setState({ active: true });
    this.setState({ show: true });
  };
  selectStatusClick = e => {
    this.setState({ selectStatus: e.target.id });
    this.setState({ active: true });
    this.setState({ show: true });
  };
  cancelFooter = () => {
    this.setState({ show: false });
  };
  changeName = e => {
    this.setState({ u: e.target.u });
    this.setState({ show: true });
  };
  changeEmail = e => {
    this.setState({ e: e.target.e });
    this.setState({ show: true });
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
    const { i, u, t, p, s, e, postStatus, postType } = this.state;
    return (
      <div className="wrapper" id="wrapper">
        <div className="row container-fluid above">
          <div className="col-6 text-left pt-3">
            <Link to={"/Users"}>
              <FontAwesomeIcon
                className="mr-2"
                icon="angle-left"
                size="lg"
                color="var(--BrightBlue)"
                onMouseEnter={this.showRowCard}
              />
              Back
            </Link>
          </div>
        </div>
        <Table
          Head={
            <React.Fragment>
              <div className="col-2">User</div>
              <div className="col-2">Email</div>
              <div className="col-2">Project</div>
              <div className="col-2">Type</div>
              <div className="col-2">Status</div>
            </React.Fragment>
          }
          Body={
            <div className="rowData  col-12" id={i}>
              <div className="col-2">
                <input
                  type="text "
                  value={u}
                  className="form-control form-control-sm"
                  onChange={this.changeName}
                />
              </div>
              <div className="col-2">
                <input
                  type="text "
                  value={e}
                  className="form-control form-control-sm"
                  onChange={this.changeEmail}
                />
              </div>
              <div className="col-2">
                <div>{p}</div>
              </div>
              <div className="col-2">
                <Select
                  status={t}
                  selectStatus={
                    this.state.selectType ? this.state.selectType : t
                  }
                  selectItems={postType.map(type => (
                    <p
                      className={
                        type.Type === t
                          ? "active dropdown-item"
                          : type.Type === this.state.selectType
                          ? " activeSelect dropdown-item"
                          : "dropdown-item"
                      }
                      key={type.Type}
                      id={type.Type}
                      onClick={this.selectTypeClick}
                    >
                      {type.Type}
                    </p>
                  ))}
                />
              </div>
              <div className="col-2">
                <Select
                  selectStatus={
                    this.state.selectStatus ? this.state.selectStatus : s
                  }
                  selectItems={postStatus.map(status => (
                    <p
                      className={
                        status.title === s
                          ? "active dropdown-item"
                          : status.title === this.state.selectStatus
                          ? " activeSelect dropdown-item"
                          : "dropdown-item"
                      }
                      key={status.title}
                      id={status.title}
                      onClick={this.selectStatusClick}
                    >
                      {status.title}
                    </p>
                  ))}
                />
              </div>
            </div>
          }
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
export default UserEdit;
