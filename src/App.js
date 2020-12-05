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
import Footer from './pages/footer/footer.component';
import {getShop} from './redux/shop/shop.actions';



class App extends React.Component {
  
  componentDidMount =  () => {
    fetch('https://my-json-server.typicode.com/dadirosadi/catalogdb/shop').then(res => res.json()).then(data => {
    this.props.getShop(data);
   })

  }
    
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
        <Footer />
      </div>
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
