import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const productId = this.props.viewParams.productId;

    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          product: data
        });
      })
      .catch(error => console.error(error));
  }

  handleClick() {
    this.props.setView('catalog', {});
  }

  render() {
    return !this.state.product
      ? <h1>Retrieving info...</h1>
      : <>
        <div className="card container detailContainer">
          <a className="nav-link active" href="#" onClick={this.handleClick}>&lt; Back to catalog</a>
          <br></br>
          <div className="row cardDetails mx-3">
            <img src={this.state.product.image} className="detailImg"></img>
            <div className="card-body-details col">
              <h5 className="card-title text-left">{this.state.product.name}</h5>
              <p className="card-text text-left">${(this.state.product.price / 100).toFixed(2)}</p>
              <p className="card-text text-left">{this.state.product.shortDescription}</p>
              <button className="btn btn-primary" onClick={e => { this.props.addToCart(this.state.product); }}>Add to Cart</button>
            </div>
          </div>
          <div className="cardLongDescription mt-5">
            <p>{this.state.product.longDescription}</p>
          </div>
        </div>
      </>;
  }
}
