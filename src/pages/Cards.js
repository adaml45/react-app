import React, { Component } from 'react';

const card ={
    width: '18rem'
};

class Cards extends Component {
  render() {
    return (
        <div className="card" style={card}>
            <img src={this.props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            <Cards 
              img="https://images.pexels.com/photos/2067659/pexels-photo-2067659.jpeg?cs=srgb&dl=beautiful-environment-idyllic-2067659.jpg&fm=jpg" 
              title= "Title" 
              text="text" />
        </div>
    );
  }
}

export default Cards;
