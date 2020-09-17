import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  render() {
    return !this.state.product
      ? <h1>Retrieving info...</h1>
      : <>
        Test
      </>;
  }

  componentDidMount() {
    fetch('/api/products/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          product: data
        }))
      .catch(error => console.error(error));
  }
}
