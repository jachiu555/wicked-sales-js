import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    const cartArray = this.props.cartState.map(items => <CartSummaryItem cartState={this.props.cart} setView={this.props.setView} item={items} key={items.cartItemId}/>);

    return (
      <div className="container grid-container">
        <p onClick={e => { this.props.setView('catalog', {}); }}>Back to Catalog</p>
        <div className="row">
          <div className="card-body">
            <div className="card cartSummaryCard">
              {cartArray}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
