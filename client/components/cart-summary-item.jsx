import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-md-4">
          <img src={this.props.item.image} className="card-img-top"></img>
        </div>
        <div className="col-md-8 mt-5">
          <h5 className="card-title">{this.props.item.name}</h5>
          <p className="card-text">${(this.props.item.price / 100).toFixed(2)}</p>
          <p className="card-text">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
