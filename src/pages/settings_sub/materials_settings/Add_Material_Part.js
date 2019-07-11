import React, { Component } from "react";
import styled from "styled-components";
import Select from "../../components/Select";
import Footer from "../../components/Footer";

const postUOM = [{ title: "UOM 1" }, { title: "UOM 2" }];
const postVendor = [{ title: "UOM 1" }, { title: "UOM 2" }];
const postGroup = [{ title: "UOM 1" }, { title: "UOM 2" }];
const postStatus = [{ title: "Active" }, { title: "In-Active" }];

class AddMaterialPart extends Component {
  state = {
    show: false,
    Succsaved: false,
    postStatus: postStatus,
    postUOM: postUOM,
    postVendor: postVendor,
    postGroup: postGroup,
    selectUOM: "",
    selectVendor: "",
    selectGroup: ""
  };
  show = () => {
    this.setState({ show: true });
  };
  selectUOMClick = e => {
    this.setState({ selectUOM: e.target.id });
    this.setState({ active: true });
    this.setState({ show: true });
  };
  selectVendorClick = e => {
    this.setState({ selectVendor: e.target.id });
    this.setState({ active: true });
    this.setState({ show: true });
  };
  selectGroupClick = e => {
    this.setState({ selectGroup: e.target.id });
    this.setState({ active: true });
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
    const { postStatus, postUOM, postVendor, postGroup } = this.state;
    return (
      <div className="Wrapper fixedCenter p-5">
        {this.props.close}
        <div className="">
          <div className="text-left">
            <h6>Add Material Part</h6>
          </div>
          <textarea
            placeholder="Description"
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <Select
            selectStatus={
              this.state.selectUOM ? this.state.selectUOM : "UOM ..."
            }
            selectItems={postUOM.map(UOM => (
              <p
                className={
                  UOM.title === this.state.selectUOM
                    ? " activeSelect dropdown-item"
                    : "dropdown-item"
                }
                key={UOM.title}
                id={UOM.title}
                onClick={this.selectUOMClick}
              >
                {UOM.title}
              </p>
            ))}
          />

          <input
            style={{ maxWidth: "116px" }}
            type="number"
            placeholder="Material Price"
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <Select
            selectStatus={
              this.state.selectVendor ? this.state.selectVendor : "Vendor ..."
            }
            selectItems={postVendor.map(Vendor => (
              <p
                className={
                  Vendor.title === this.state.selectVendor
                    ? " activeSelect dropdown-item"
                    : "dropdown-item"
                }
                key={Vendor.title}
                id={Vendor.title}
                onClick={this.selectVendorClick}
              >
                {Vendor.title}
              </p>
            ))}
          />
          <Select
            selectStatus={
              this.state.selectGroup ? this.state.selectGroup : "Group ..."
            }
            selectItems={postGroup.map(Group => (
              <p
                className={
                  Group.title === this.state.selectGroup
                    ? " activeSelect dropdown-item"
                    : "dropdown-item"
                }
                key={Group.title}
                id={Group.title}
                onClick={this.selectGroupClick}
              >
                {Group.title}
              </p>
            ))}
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
export default AddMaterialPart;
