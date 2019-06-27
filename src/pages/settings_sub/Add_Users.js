import React, { Component } from "react";
import Footer from "../components/Footer";

class AddUser extends Component {
  state = {
    show: false,
    Succsaved: false
  };
  show = () => {
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
  cancelFooter = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="Wrapper fixedCenter p-5">
        {this.props.close}
        <div className="table-responsive text-right">
          <div className="text-left">
            <h6>Add User</h6>
          </div>
          <input
            type="text"
            placeholder="Project ID"
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <input
            type="text"
            placeholder="User ID"
            AddUser
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <input
            type="text"
            placeholder="User Email"
            AddUser
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <input
            type="text"
            placeholder="Permission Type"
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <div className={this.state.show ? "show" : "hide"}>
            <Footer
              pop={"popup"}
              sucessfulSaveFooterColor={this.state.Succsaved ? "greenBgd" : ""}
              sucessfulSave={this.state.Succsaved ? "show" : "hide"}
              footerBtns={this.state.Succsaved ? "hide" : "show"}
              Cancel={<span onClick={this.cancelFooter}> Cancel</span>}
              Save={<span onClick={this.saveClick}> Save</span>}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
