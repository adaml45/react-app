import React, { Component } from "react";
import styled from "styled-components";

class Loading extends Component {
  render() {
    return (
      <LoaderWrapper>
        <div className="loader">
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__bar" />
          <div className="loader__ball" />
          <div className="loadingText">Loading Your Data...</div>
        </div>
      </LoaderWrapper>
    );
  }
}

const LoaderWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0;
  margin: auto;
  text-align: center;
  width: 200px;
  height: 200px;
  z-index: 1070;
  background-color: var(--DarkBlue);
  border-radius: 50%;
  bottom: 0;
  border: solid 5px var(--OffWhite);
  box-shadow: 0 0 35px 10px rgba(0, 0, 0, 0.24);
  .loader {
    position: absolute;
    width: 75px;
    height: 100px;
    top: 11px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .loader__bar {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 50%;
    background: var(--White);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
  }
  .loader__bar:nth-child(1) {
    left: 0px;
    -webkit-transform: scale(1, 0.2);
    transform: scale(1, 0.2);
    -webkit-animation: barUp1 4s infinite;
    animation: barUp1 4s infinite;
  }
  .loader__bar:nth-child(2) {
    left: 15px;
    -webkit-transform: scale(1, 0.4);
    transform: scale(1, 0.4);
    -webkit-animation: barUp2 4s infinite;
    animation: barUp2 4s infinite;
  }
  .loader__bar:nth-child(3) {
    left: 30px;
    -webkit-transform: scale(1, 0.6);
    transform: scale(1, 0.6);
    -webkit-animation: barUp3 4s infinite;
    animation: barUp3 4s infinite;
  }
  .loader__bar:nth-child(4) {
    left: 45px;
    -webkit-transform: scale(1, 0.8);
    transform: scale(1, 0.8);
    -webkit-animation: barUp4 4s infinite;
    animation: barUp4 4s infinite;
  }
  .loader__bar:nth-child(5) {
    left: 60px;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-animation: barUp5 4s infinite;
    animation: barUp5 4s infinite;
  }
  .loadingText {
    font-size: 12px;
    position: absolute;
    bottom: -39px;
    color: var(--White);
  }
`;

export default Loading;
