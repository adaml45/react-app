import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";

class UserEdit extends Component {
  state = {
    i: "",
    a: "",
    t: ""
  };

  componentDidMount() {
    const Agent = props => {
      let i = this.props.location.state.id;
      let a = this.props.location.state.agent;
      let p = this.props.location.state.project;
      let t = this.props.location.state.type;
      this.setState({ i, a, t, p });
    };
    Agent();
  }
  render() {
    const { i, a, t, p } = this.state;
    return (
      <div className="wrapper">
        <div className="row container-fluid above">
          <div className="col-6 text-left pt-3">
            <Link to={"/Users"}>Back</Link>
          </div>
        </div>
        <Table
          Head={
            <React.Fragment>
              <div className="col-2">User</div>
              <div className="col-2">Project</div>
              <div className="col-2">Type</div>
            </React.Fragment>
          }
          Body={
            <div className="rowData  col-12" id={i}>
              <div className="col-2">
                <div>{a}</div>
              </div>
              <div className="col-2">
                <div>{p}</div>
              </div>
              <div className="col-2">
                <div>{t}</div>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default UserEdit;
