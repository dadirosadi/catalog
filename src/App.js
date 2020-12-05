import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CategoryPage from './pages/category/category.component';
import ProductDetailPage from './pages/detail-product/detail-product.component';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/:title' component={CategoryPage} />
          <Route exact path='/:title/:id' component={ProductDetailPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
