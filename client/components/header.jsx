import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h3>$ Wicked Sales</h3>
          <h3>{this.props.cartItemCount}</h3>
        </header>
      </div>
    );
  }
}
