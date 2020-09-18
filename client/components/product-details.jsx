import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  componentDidMount() {
    // console.log(this.props);
    const productId = this.props.viewParams.productId;

    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        // console.log('productInfo', data);
        this.setState({
          product: data
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return !this.state.product
      ? <h1>Retrieving info...</h1>
      : <>
        <div className="card col-md-3 m-1" onClick={this.handleClick}>
          <img src={this.state.product.image} className="card-img-top cardImage mx-auto w-50" alt="Card image cap"></img>
          <div className="card-body">
            <h6 className="card-title">{this.state.product.name}</h6>
            <p className="card-price">${(this.state.product.price / 100).toFixed(2)}</p>
            <p className="card-text text-center">{this.state.product.shortDescription}</p>
          </div>
        </div>
      </>;
  }
}
