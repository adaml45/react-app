import React, { Component } from "react";
import styled from "styled-components";
import Select from "../../components/Select";
import Footer from "../../components/Footer";

const postCrew = [{ title: "SubContractor 1" }, { title: "SubContractor 2" }];
const postStatus = [{ title: "Active" }, { title: "In-Active" }];

class AddCrew extends Component {
  state = {
    show: false,
    Succsaved: false,
    postCrew: postCrew,
    postStatus: postStatus
  };
  show = () => {
    this.setState({ show: true });
  };
  selectCrewClick = e => {
    this.setState({ selectCrew: e.target.id });
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
    const { postStatus, postCrew } = this.state;
    return (
      <div className="Wrapper fixedCenter p-5">
        {this.props.close}
        <div className="">
          <div className="text-left">
            <h6>Add Crew</h6>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2 form-control-sm"
            onChange={this.show}
          />
          <Select
            selectStatus={
              this.state.selectCrew
                ? this.state.selectCrew
                : "SubContractor ..."
            }
            selectItems={postCrew.map(Crew => (
              <p
                className={
                  Crew.title === this.state.selectCrew
                    ? " activeSelect dropdown-item"
                    : "dropdown-item"
                }
                key={Crew.title}
                id={Crew.title}
                onClick={this.selectCrewClick}
              >
                {Crew.title}
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
export default AddCrew;
