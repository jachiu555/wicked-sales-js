import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setView('cart', {});
  }

  render() {
    return (
      <div>
        <header>
          <div className="d-flex">
            <h3 className="mr-auto p-2">$ Wicked Sales</h3>
            <h3 className="p-2" onClick={this.handleClick}>{`${this.props.cartItemCount} item(s) ${this.props.totalPrice}`}</h3>
            <i className="fas fa-shopping-cart p-2"></i>
          </div>
        </header>
      </div>
    );
  }
}
