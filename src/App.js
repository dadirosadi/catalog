import React, {Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import {getShop} from './redux/shop/shop.actions';
const Header = React.lazy(() => import('./components/header/header.component'));
const HomePage = React.lazy(() => import('./pages/homepage/homepage.component'));
const CheckoutPage = React.lazy(() => import('./pages/checkout/checkout.component'));
const CategoryPage = React.lazy(() => import('./pages/category/category.component'));
const ProductDetailPage = React.lazy(() => import('./pages/detail-product/detail-product.component'));
const Footer = React.lazy(() => import('./pages/footer/footer.component'));




class App extends React.Component {
  
  componentDidMount =  () => {
    fetch('https://my-json-server.typicode.com/dadirosadi/catalogdb/shop').then(res => res.json()).then(data => {
    this.props.getShop(data);
   })

  }
    
  render() {
    return (
    <Suspense fallback=''>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/:title' component={CategoryPage} />
          <Route exact path='/:title/:id' component={ProductDetailPage} />
        </Switch>
        <Footer />
      </Suspense>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({
  getShop: (data) => dispatch(getShop(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
