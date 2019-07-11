import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const postStatus = [{ title: "Active" }, { title: "In-Active" }];

class AddCommunity extends Component {
  state = {
    show: false,
    Succsaved: false,
    postStatus: postStatus
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
    const { postStatus } = this.state;
    return (
      <div className="Wrapper fixedCenter p-5">
        {this.props.close}
        <div className="">
          <div className="text-left">
            <h6>Add Community</h6>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <input
            type="text"
            placeholder="Address"
            AddUser
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <input
            type="text"
            placeholder="Region"
            AddUser
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          {postStatus.map(row => (
            <Status status={row.title} style={{ marginRight: "10px" }}>
              {row.title}
              <input
                type="radio"
                key={row.title}
                name="status"
                value={row.title}
                style={{ marginLeft: "10px" }}
              />
            </Status>
          ))}
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
export const Status = styled.label`
  color: ${props => (props.status === "Active" ? "#8BC34A" : "#F44336")};
  text-align: center;
`;
export default AddCommunity;
