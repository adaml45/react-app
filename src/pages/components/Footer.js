import React, { Component } from "react";
import styled from "styled-components";
import { ButtonWrap } from "./Buttons";
class Footer extends Component {
  render() {
    return (
      <FooterWrap
        popup={this.props.pop}
        className={`footer ${this.props.sucessfulSaveFooterColor}`}
      >
        <div className="row container">
          <div className={`sucessful ${this.props.sucessfulSave}`}>
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <p>Successful Save</p>
          </div>
          <div className={`col-auto  ${this.props.footerBtns}`}>
            <ButtonWrap type="button" className="btn btn-sm">
              {this.props.Cancel}
            </ButtonWrap>
          </div>
          <div className={`col-auto ml-auto ${this.props.footerBtns}`}>
            <ButtonWrap save type="button" className="btn btn-sm">
              {this.props.Save}
            </ButtonWrap>
          </div>
        </div>
      </FooterWrap>
    );
  }
}

export const FooterWrap = styled.div`
  position: ${props => (props.popup ? "absolute" : "fixed")};
  bottom: 0;
  left: ${props => (props.popup ? "0" : "")};
  width: ${props => (props.popup ? "100%" : "calc(100vw - 235px)")};
  height: auto;
  padding: 10px 0;
  background-color: var(--LightGray);
  &.greenBgd {
    background-color: #73b73c !important;
  }
  span {
    text-transform: Uppercase;
    font-size: 13px;
  }
  & > div {
    margin: auto;
  }
  .sucessful {
    margin: auto;
    height: 56px;
  }
  .checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
  }
  .checkmark {
    position: relative;
    top: -30px
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
  }
  p{
    position: relative;
    top: -45px;
    color: #fff
  }
  .checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes scale {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
  }
`;
export default Footer;
