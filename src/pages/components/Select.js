import React, { Component } from "react";
import styled from "styled-components";
import { ButtonWrap } from "./Buttons";
class Select extends Component {
  state = {
    show: false
  };
  toggleSelect = () => {
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
            onMouseOver={this.toggleSelect}
          >
            {this.props.selectStatus}
          </ButtonWrap>
          <div
            className={
              this.state.show === true
                ? "dropdown-select show"
                : "dropdown-select hide"
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
    height: auto;
    background-color: var(--White);
    border-radius: 0 0 5px 5px;
    border-top: solid 1px var(--DarkBlue);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .btn {
    line-height: 1;
    font-size: 13px;
    color: var(--BrightBlue);
    &:hover {
      color: var(--White);
    }
  }
  .dropdown-item {
    margin: 0;
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
