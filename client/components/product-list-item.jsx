import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col-md-3 m-1">
        <img src={this.props.item.image} className="card-img-top cardImage mx-auto w-50" alt="Card image cap"></img>
        <div className="card-body">
          <h6 className="card-title">{this.props.item.name}</h6>
          <p className="card-price">${this.props.item.price}</p>
          <p className="card-text text-center">{this.props.item.shortDescription}</p>
        </div>
      </div>
    );
  }
}
