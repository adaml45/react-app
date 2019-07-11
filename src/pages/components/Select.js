import React, { Component } from "react";
import styled from "styled-components";
import { ButtonWrap } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Select extends Component {
  state = {
    show: false
  };
  toggleSelect = () => {
    this.setState({ show: !this.state.show });
  };
  toggleSelectInOut = () => {
    this.setState({ show: !this.state.show });
  };
  toggleSelectOut = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div>
        <SelectWrap className="select">
          <ButtonWrap
            type="button"
            className="btn  btn-sm"
            onClick={this.toggleSelectInOut}
          >
            {this.props.selectStatus}
            <span style={{ paddingLeft: "10px" }}>
              <FontAwesomeIcon icon="angle-down" color="#6199b4" size="1x" />
            </span>
          </ButtonWrap>

          <div
            className={
              this.state.show ? "dropdown-select show" : "dropdown-select hide"
            }
            onMouseLeave={this.toggleSelectOut}
          >
            {this.props.selectItems}
          </div>
        </SelectWrap>
      </div>
    );
  }
}

export const SelectWrap = styled.div`
  position: relative;
  .dropdown-select {
    position: absolute;
    top: 32px;
    left: 0;
    right: 0;
    z-index: 9;
    height: auto;
    background-color: var(--White);
    border-radius: 0 0 5px 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .btn {
    width: 100%;
    line-height: 1;
    font-size: 13px;
    color: var(--BrightBlue);
    border-radius: 0 0;
    border: none;
    border-bottom: solid thin transparent;
    text-align: inherit;
    &:hover {
      color: var(--LightBlue);
      background-color: transparent;
      border-bottom: solid thin var(--LightBlue);
    }
  }
  .dropdown-item {
    margin: 0;
    font-size: 13px;
    text-align: inherit;
    &:not(:last-of-type) {
      border-bottom: solid thin #ddd;
    }
    &.active {
      color: #fff !important;
      text-decoration: none;
      background-color: var(--BrightBlue);
    }
    &:active {
      background-color: var(--DarkBlue);
    }
    &.activeSelect {
      background-color: var(--LightGray);
    }
  }
`;
export default Select;
