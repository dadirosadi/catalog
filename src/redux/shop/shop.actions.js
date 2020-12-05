import ShopActionTypes from './shop.types';

export const getShop = (data) =>  ({
  type: ShopActionTypes.GET_DATA_SHOP,
  payload:data
})

export const addProductDetail = (item, category) => ({
  type: ShopActionTypes.ADD_PRODUCT_DETAIL,
  payload: {
    item,
    category
  }
});

