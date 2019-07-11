import React, { Component } from "react";
import styled from "styled-components";

class Cards extends Component {
  render() {
    return (
      <CargWrapper className="card col-md-6 col-lg-4 col-xl-3 mt-2">
        <div className="card-body">
          <h6 className="card-title">{this.props.title}</h6>
          <ul className="list-group list-group-flush">{this.props.link}</ul>
        </div>
      </CargWrapper>
    );
  }
}
const CargWrapper = styled.div`
  background: var(--OffWhite);
  border-color: rgb(255, 255, 255);
  .card-body {
    padding: 1.25rem 0;
    .card-link + .card-link {
      margin-left: 0;
    }
    .card-title {
      padding-left: 19px;
    }
    .list-group-item {
      border: none;
      background: var(--OffWhite);
    }
    .list-group-item {
      font-size: 13px;
    }
  }
`;
export default Cards;
