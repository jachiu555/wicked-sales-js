import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    const cartArray = this.props.cartState.map(items => <CartSummaryItem cartState={this.props.cart} setView={this.props.setView} item={items} key={items.cartItemId}/>);

    return (
      <div className="container cartSummaryContainer">
        <div className="container cartSummaryButton">
          <a className="nav-link active" href="#" onClick={e => { this.props.setView('catalog', {}); }}>&lt; Back to Catalog</a>
        </div>
        <div className="row">
          <div className="card">
            <div className="cartSummaryCard">
              {cartArray}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
