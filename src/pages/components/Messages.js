import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Messages extends Component {
  render() {
    const { message, que } = this.props;
    return (
      <div className="card-body p-0">
        <ul>
          <li className="">
            <FontAwesomeIcon icon="bell" size="xs" />
            {` `}New {message}
          </li>
          <li className="">
            <FontAwesomeIcon icon="bell" size="xs" />
            {` `}Que {que}
          </li>
        </ul>
      </div>
    );
  }
}

export default Messages;
