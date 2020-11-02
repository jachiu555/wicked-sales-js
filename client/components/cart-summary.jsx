import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    const cartArray = this.props.cartState.map(items => <CartSummaryItem cartState={this.props.cart} setView={this.props.setView} item={items} key={items.cartItemId}/>);
    const itemTotal = (this.props.totalCost / 100).toFixed(2);
    const emptyCartMessage = this.props.cartItemCount <= 0 ? 'Cart is empty!' : '';
    const filledCartMessage = this.props.cartItemCount <= 0 ? '' : `Item Total: $${itemTotal}`;

    return (
      <div className="container">
        <div className="cartSummaryButton">
          <a className="nav-link active" href="#" onClick={e => { this.props.setView('catalog', {}); }}>&lt; Back to Catalog</a>
        </div>
        <div className="col">
          {emptyCartMessage}
          <div className="col">
            {cartArray}
          </div>
          <h4 className="itemTotal mt-4">{filledCartMessage}</h4>
        </div>
      </div>
    );
  }
}
