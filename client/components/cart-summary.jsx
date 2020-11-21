import React from 'react';
import CartSummaryItem from './cart-summary-item';
// import CheckoutForm from './checkout-form';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      show: false
    };

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.checkoutButton = this.checkoutButton.bind(this);
  }

  showForm(e) {
    this.setState({
      show: true
    });
  }

  hideForm(e) {
    this.setState({
      show: false
    });
  }

  checkoutButton() {
    this.props.setView('checkout', {});
  }

  render() {
    const cartArray = this.props.cartState.map(items => <CartSummaryItem cartState={this.props.cart} setView={this.props.setView} item={items} key={items.cartItemId}/>);
    const itemTotal = (this.props.totalCost / 100).toFixed(2);
    const emptyCartMessage = this.props.cartState.length <= 0 ? <h1>Cart is Empty!</h1> : '';
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
            <button type="button" className="btn btn-primary" onClick={this.checkoutButton}>Checkout</button>
          </div>
          <h4 className="itemTotal mt-4">{filledCartMessage}</h4>
        </div>
      </div>
    );
  }
}
