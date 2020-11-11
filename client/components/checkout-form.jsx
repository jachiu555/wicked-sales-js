import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      creditCardNumber: '',
      shippingAddress: ''
    };
  }

  render() {
    return (
      <div>
        <form className="needs-validation d-flex container justify-content-center">
          <div className="form-col">
            <div className="mb-3">
              <input type="text" className="form-control" id="validationCustom01" value="User Name" required></input>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="validationCustom01" value="Credit Card Number" required></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 1</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity"></input>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>Alabama - AL</option>
                  <option>Alaska - AK</option>
                  <option>Arizona - AZ</option>
                  <option>Arkansas - AR</option>
                  <option>California - CA</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip"></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
