import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

class Accordion extends Component {
  state = {
    open: false,
    class: "section"
  };
  handleClick = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    } else {
      this.setState({
        open: true,
        class: "section open"
      });
    }
  };
  getInitialState = () => {
    return {
      open: false,
      class: "section"
    };
  };

  render() {
    return (
      <AccordionWrap>
        <div className={this.state.class}>
          <div className="sectionhead" onClick={this.handleClick}>
            {this.props.title}
            <span className="accordIcon">
              <FontAwesomeIcon icon="angle-down" color="white" size="1x" />
            </span>
          </div>
          <div className="articlewrap">
            <div className="article">{this.props.children}</div>
          </div>
        </div>
      </AccordionWrap>
    );
  }
}
export const AccordionWrap = styled.div`
  position: relative;
  * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  .section {
    position: relative;
    width: 100%;
    border-bottom: 2px solid var(--OffWhite);
    background-color: var(--OffWhite);
  }

  .section.open {
    button {
      &:before,
      &:after {
        height: 14px;
      }
      &:before {
        transform: translate(0%, -50%) rotate(-45deg);
      }
      &:after {
        transform: translate(0%, -50%) rotate(45deg);
      }
    }
    .articlewrap {
      height: auto;
      padding-bottom: 50px;
    }
  }

  .articlewrap {
    height: 0;
    overflow: hidden;
    transition: all 0.2s ease-in;
  }

  .sectionhead {
    width: 100%;
    overflow: hidden;
    background: var(--BrightBlue);
    cursor: pointer;
    color: var(--White);
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 1em;
    padding-right: 2.1em;
    .accordIcon {
      padding-left: 10px;
    }
  }

  .article {
    position: relative;
    padding: 1em;
    color: var(--DarkBlue);
    line-height: 1.3;
  }
`;
export default Accordion;
