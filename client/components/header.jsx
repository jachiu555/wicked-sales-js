import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="d-flex">
            <h3 className="mr-auto p-2">$ Wicked Sales</h3>
            <h3 className="p-2">{`${this.props.cartItemCount} item(s)`}</h3>
            <i className="fas fa-shopping-cart p-2"></i>
          </div>
        </header>
      </div>
    );
  }
}
