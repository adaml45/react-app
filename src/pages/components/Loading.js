import React, { Component } from 'react';


class Loading extends Component {
     
render() {
    return (
        <div  className="loaderWrapper ">
            <div className= 'loader'>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
                <div className="loadingText">Loading Your Data...</div>
            </div>
        </div>
    );
  }
}

export default Loading ;




