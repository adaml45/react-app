import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function searchFilter(search) {
    return function(x) {
      return x.FullName.toLowerCase().includes(search.toLowerCase()) || !search;
    };
  }

class UserData extends Component {
    state = {
           userData: [],
        
    };
    
    componentDidMount() {
        fetch('http://localhost:8080/api/user/1')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => this.setState({ userData: data }));
       
    }
    render() {
    const { userData } = this.state;
    let searchString = this.props.UserSearch;
    console.log(searchString);
    
      return (
            userData.filter(searchFilter(searchString)).map(row => (
                <Link
                    to={{
                        pathname: "/Users_Edit",
                        state: {
                            id: row.ProjectUserID,
                            project: row.ProjectName,
                            user: row.fullname,
                            email: row.Email,
                            type: row.Type,
                            status: row.Status
                        }
                    }}
                >
                    <div className="rowData  col-12" key={row.ProjectUserID} >
                        <div className="col-1">
                            <div>{row.ProjectUserID}</div>
                        </div>
                        <div className="col-2">
                            <div>{row.ProjectName}</div>
                        </div>
                        <div className="col-2">
                            <div>{row.FullName}</div>
                        </div>
                        <div className="col-2">
                            <div>{row.email}</div>
                        </div>
                        <div className="col-2">
                            <div>{row.type}</div>
                        </div>
                        <div className="col-2">
                            <Status status={row.Status} className="status">
                                {row.Status}
                            </Status>
                        </div>
                    </div>
                </Link>
            ))
          )
     }
}

export const Status = styled.div`
  color: var(--White);
  background-color: ${props =>
        props.status === "Active" ? "#8BC34A" : "#F44336"};
  text-align: center;
`;

export default UserData;