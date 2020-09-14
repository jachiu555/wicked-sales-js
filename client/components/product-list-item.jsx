import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="card col-md-2">
        <img className="card-img-top" alt="Card image cap"></img>
        <div className="card-body">
          <p className="card-price">Price Here</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
        </div>
      </div>
    );
  }
}
