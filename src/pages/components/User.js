import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class User extends Component {
     
render() {
    return (
        <div className="card-body">
        <ul>
            <li className="tableToggleRow"><FontAwesomeIcon icon="id-card" size="xs"/> Profile</li>
            <li className="tableToggleCard"><FontAwesomeIcon icon="sign-out-alt" size="xs"/> LogOut</li>
        </ul>
        </div>
    );
  }
}

export default User ;




