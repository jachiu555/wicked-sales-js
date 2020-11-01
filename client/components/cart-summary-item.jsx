import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="row cartItem mb-3">
        <div className="col-md-4">
          <img src={this.props.item.image} className="cartImg m-3 p-2"></img>
        </div>
        <div className="card-body-details col-md-8 mt-3 pt-5">
          <h5 className="card-title ">{this.props.item.name}</h5>
          <p className="card-text ">${(this.props.item.price / 100).toFixed(2)}</p>
          <p className="card-text ">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
