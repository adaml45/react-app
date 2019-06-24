import React, { Component } from "react";
import styled from "styled-components";
import { ButtonWrap } from "./Buttons";
class Footer extends Component {
  render() {
    return (
      <FooterWrap className="footer">
        <div className="row container-fluid">
          <div className="col-auto">
            <ButtonWrap type="button" className="btn  btn-sm">
              {this.props.Cancel}
            </ButtonWrap>
          </div>
          <div className="col-auto ml-auto">
            <ButtonWrap save type="button" className="btn  btn-sm">
              {this.props.Save}
            </ButtonWrap>
          </div>
        </div>
      </FooterWrap>
    );
  }
}

export const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100vw - 235px);
  height: auto;
  padding: 10px 0;
  background-color: var(--LightGray);
  span {
    text-transform: Uppercase;
    font-size: 13px;
  }
`;
export default Footer;
