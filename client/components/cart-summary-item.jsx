import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className="card container">
        <div className="row cardDetails mb-3">
          <img src={this.props.item.image} className="detailImg"></img>
          <div className="card-body-details col">
            <h5 className="card-title text-left">{this.props.item.name}</h5>
            <p className="card-text text-left">${(this.props.item.price / 100).toFixed(2)}</p>
            <p className="card-text text-left">{this.props.item.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
