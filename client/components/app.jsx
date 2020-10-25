import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };

    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));

    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cart: data.length
        });
      });
  }

  addToCart(product) {
    fetch('api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(data => {
        this.setState({
          cart: this.state.cart + 1
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  renderView() {
    const viewName = this.state.view.name;
    const viewParams = this.state.view.params;

    switch (viewName) {
      case 'catalog':
        return <ProductList setView={this.setView}/>;
      case 'details':
        return <ProductDetails addToCart={this.addToCart} viewParams={viewParams} setView={this.setView}/>;
    }
  }

  render() {
    return this.state.isLoading
      ? <h1>Testing connections...</h1>
      : <>
        <Header cartItemCount={this.state.cart}/>
        {this.renderView()}
      </>;
  }
}
