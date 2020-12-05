import ShopActionTypes from './shop.types';

export const addProductDetail = (item, category) => ({
  type: ShopActionTypes.ADD_PRODUCT_DETAIL,
  payload: {
    item,
    category
  }
});

