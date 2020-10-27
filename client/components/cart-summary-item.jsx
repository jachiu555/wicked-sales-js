import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="card col-md-3 m-1" onClick={this.handleClick}>
        <img src={this.props.item.image} className="card-img-top cardImage" alt="Card image cap"></img>
        <div className="card-body">
          <h6 className="card-title">{this.props.item.name}</h6>
          <p className="card-price">${(this.props.item.price / 100).toFixed(2)}</p>
          <p className="card-text text-left mb-2">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
