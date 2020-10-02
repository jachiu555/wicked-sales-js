import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };

    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  renderView() {
    const viewName = this.state.view.name;
    const viewParams = this.state.view.params;

    switch (viewName) {
      case 'catalog':
        return <ProductList setView={this.setView}/>;
      case 'details':
        return <ProductDetails viewParams={viewParams} setView={this.setView}/>;
    }
  }

  render() {
    return this.state.isLoading
      ? <h1>Testing connections...</h1>
      : <>
        <Header />
        {this.renderView()}
      </>;
  }
}
