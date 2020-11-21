import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      creditCardNumber: '',
      shippingAddress: ''
    };

    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onCreditCardNumberChange = this.onCreditCardNumberChange.bind(this);
    this.onShippingAddressChange = this.onShippingAddressChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.placeOrderButton = this.placeOrderButton.bind(this);
  }

  onUserNameChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  onCreditCardNumberChange(event) {
    const re = /^[0-9\b]+$/;

    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({
        creditCardNumber: event.target.value
      });
    }
  }

  onShippingAddressChange(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.placeOrder(this.state);
  }

  // placeOrderButton() {
  //   this.props.placeOrder(this.state)
  // }

  render() {
    return (
      <div>
        <form id="myForm" className="needs-validation d-flex container justify-content-center" onSubmit={this.handleSubmit}>
          <div className="form-col">
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1">User Name</label>
              <input type="text" className="form-control" id="validationCustom01" onChange={this.onUserNameChange} placeholder="User Name" required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea2">Credit Card</label>
              <input type="text" className="form-control" id="validationCustom01" onChange={this.onCreditCardNumberChange} placeholder="Credit Card Number" required></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea3">Shipping Address</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input className="btn btn-primary mb-5" type="submit" value="Place Order"></input>
          </div>
        </form>
      </div>
    );
  }
}
