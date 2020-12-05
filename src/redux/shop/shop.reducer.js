import ShopActionTypes from './shop.types';
import {findRelatedProduct} from './shop.utils';

const INITIAL_STATE = {
  collections: [],
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
      case ShopActionTypes.GET_DATA_SHOP:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
