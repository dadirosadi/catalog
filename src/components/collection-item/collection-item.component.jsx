import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { addProductDetail } from '../../redux/shop/shop.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, addProductDetail, history, category }) => {
  const { name, price, imageUrl, id } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        onClick={() => {
          addProductDetail(item, category);
          history.push(`/${category.toLowerCase()}/${id}`)
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  addProductDetail: (item, category) => dispatch(addProductDetail(item, category))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
