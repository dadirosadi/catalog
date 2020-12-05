import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';
import {findRelatedProduct} from './shop.utils';

const INITIAL_STATE = {
  collections: SHOP_DATA,
  relatedProduct: [],
  productDetail: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.ADD_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload.item,
        relatedProduct: findRelatedProduct(state.collections, action.payload.category)
      };
    default:
      return state;
  }
};

export default shopReducer;
