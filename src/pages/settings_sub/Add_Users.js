import React, { Component } from "react";
import { ButtonWrap } from "../components/Buttons";

class AddUser extends Component {
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
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="User ID"
            AddUser
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Permission Type"
            className="form-control mb-2"
          />
          <ButtonWrap save>SAVE</ButtonWrap>
        </div>
      </div>
    );
  }
}

export default AddUser;
