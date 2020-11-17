import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.checkoutButton = this.checkoutButton.bind(this);
  }

  checkoutButton() {
    this.props.setView('checkout', {});
  }

  render() {
    const cartArray = this.props.cartState.map(items => <CartSummaryItem cartState={this.props.cart} setView={this.props.setView} item={items} key={items.cartItemId}/>);
    const itemTotal = (this.props.totalCost / 100).toFixed(2);
    const emptyCartMessage = this.props.cartState.length <= 0 ? <h1>Cart is Empty!</h1> : '';
    const filledCartMessage = this.props.cartItemCount <= 0 ? '' : `Item Total: $${itemTotal}`;
    const checkout = this.props.cartItemCount > 0 ? <button onClick={this.checkoutButton()}>CheckOut</button> : null;

    return (
      <div className="container">
        <div className="cartSummaryButton">
          <a className="nav-link active" href="#" onClick={e => { this.props.setView('catalog', {}); }}>&lt; Back to Catalog</a>
        </div>
        <div className="col">
          {emptyCartMessage}
          {checkout}
          <div className="col">
            {cartArray}
          </div>
          <h4 className="itemTotal mt-4">{filledCartMessage}</h4>
        </div>
      </div>
    );
  }
}
