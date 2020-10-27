import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    const cartArray = this.props.cartState.map(items => <CartSummaryItem cartState={this.props.cart} setView={this.props.setView} item={items} key={items.cartItemId}/>);

    return (
      <>
        <h6 className={'backToCatalogButton'} ><button onClick={e => { this.props.setView('catalog', {}); }}>Back to Catalog</button></h6>
        <div className="column justify-content-center">
          {cartArray}
        </div>
      </>
    );
  }
}
