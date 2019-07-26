import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import styled from "styled-components";
import Select from "../components/Select";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const postStatus = [{ title: "Active" }, { title: "In-Active" }];

class UserEdit extends Component {
  state = {
    active: false,
    show: false,
    Succsaved: false,
    postStatus: postStatus,
    selectType: "",
    selectStatus: "",
    editData: [],
    permType: [],
    first_name: '',
    last_name: '',
    email: ''
  };

  constructor(props){
    super(props);

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }
  componentDidMount() {

    const Agent = () => {
      let i = this.props.location.state.id;
      let firstName = "";//this.state.editData[0].FirstName;
      let lastName = "";//this.state.editData[0].LastName;
      let e = this.props.location.state.email;
      let p = this.props.location.state.project;
      let t = this.props.location.state.type;
      let s = this.props.location.state.status;
      this.setState({ i, lastName, firstName, t, p, s, e });
    };

    fetch("http://localhost:8080/api/permissionTypes")
      .then(response => {
        return response.json()
      })
      .then(data => this.setState({permType: data}));

    fetch("http://localhost:8080/api/userInfo." + this.props.location.state.userID)
      .then(response => {
        //console.log(response.json())
        return response.json()
      })
      .then(data => {this.setState({editData: data, first_name: data[0].FirstName, last_name: data[0].LastName, email: data[0].Email})
        console.log(data);

      })
      .then(Agent());
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
  changeFirstName = e => {
    this.setState({ first_name: e.target.value });
    this.setState({ show: true });
  };
  changeLastName = e => {
    this.setState({ last_name: e.target.value });
    this.setState({ show: true });
  };
  changeEmail = e => {
    this.setState({ email: e.target.value });
    this.setState({ show: true });
  };
  saveClick = () => {
    //this.setState({ Succsaved: true });
    //let datFirst = 
    let updateURI = "http://localhost:8080/api/updateUser-" + this.props.location.state.userID + '-' + this.state.first_name + '-'
       + this.state.last_name + '-' +  this.state.email + '-' + this.state.s + '-' + this.state.t;

    fetch(updateURI, {method:'POST', body: {lastName: this.state.last_name, firstName: this.state.first_name}})
      .then(response => {
        console.log(response)
        this.setState({Succsaved: true})
        setTimeout(() => {
          this.setState({
            Succsaved: false
          });
          this.setState({
            show: false
          });
          console.log('updated')
          //this.setState({state: this.state});
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      })

    // setTimeout(() => {
    //   this.setState({
    //     Succsaved: false
    //   });
    //   this.setState({
    //     show: false
    //   });
    // }, 3000);
  };
  render() {
    const { i, t, p, s, e, postStatus, editData, permType, first_name, last_name, email } = this.state;
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
        <div className="table-responsive" style={{ height: "" }}>
          <Table
            Head={
              <React.Fragment>
                <div className="col-2">First Name</div>
                <div className="col-2">Last Name</div>
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
                    type="text"
                    //defaultValue={editData.map((data) => {return data.FirstName})}
                    value={this.state.first_name}
                    className="form-control form-control-sm"
                    onChange={this.changeFirstName}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="text"
                    //defaultValue={editData.map((data) => {return data.LastName})}
                    value={last_name}
                    className="form-control form-control-sm"
                    onChange={this.changeLastName}
                  />
                </div>
                <div className="col-2">
                  <input
                    type="text "
                    value={email}
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
                    selectItems={permType.map(type => (
                      <p
                        className={
                          type.UTName === t
                            ? "active dropdown-item"
                            : type.UTName === this.state.selectType
                            ? " activeSelect dropdown-item"
                            : "dropdown-item"
                        }
                        key={type.UTID}
                        id={type.UTName}
                        onClick={this.selectTypeClick}
                      >
                        {type.UTName}
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
                      <Status
                        status={status.title}
                        className={
                          status.title === s
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
            }
          />
        </div>
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
export default UserEdit;
