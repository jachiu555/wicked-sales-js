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
                  <option>Colorado - CO</option>
                  <option>Connecticut - CT</option>
                  <option>Delaware - DE</option>
                  <option>Florida - FL</option>
                  <option>Georgia - GA</option>
                  <option>Hawaii - HI</option>
                  <option>Idaho - ID</option>
                  <option>Illinois - IL</option>
                  <option>Indiana - IN</option>
                  <option>Iowa - IA</option>
                  <option>Kansas - KS</option>
                  <option>Kentucky - KY</option>
                  <option>Louisiana - LA</option>
                  <option>Maine - ME</option>
                  <option>Maryland - MD</option>
                  <option>Massachusetts - MA</option>
                  <option>Michigan - MI</option>
                  <option>Minnesota - MN</option>
                  <option>Mississippi - MS</option>
                  <option>Missouri - MO</option>
                  <option>Montana - MT</option>
                  <option>Nebraska - NE</option>
                  <option>Nevada - NV</option>
                  <option>New Hampshire - NH</option>
                  <option>New Jersey - NJ</option>
                  <option>New Mexico - NM</option>
                  <option>New York - NY</option>
                  <option>North Carolina - NC</option>
                  <option>North Dakota - ND</option>
                  <option>Ohio - OH</option>
                  <option>Oklahoma - OK</option>
                  <option>Oregon - OR</option>
                  <option>Pennsylvania - PA</option>
                  <option>Rhode Island - RI</option>
                  <option>South Carolina - SC</option>
                  <option>South Dakota - SD</option>
                  <option>Tennessee - TN</option>
                  <option>Texas - TX</option>
                  <option>Utah - UT</option>
                  <option>Vermont - VT</option>
                  <option>Virginia - VA</option>
                  <option>Washington - WA</option>
                  <option>West Virginia - WV</option>
                  <option>Wisconsin - WI</option>
                  <option>Wyoming - WY</option>
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
