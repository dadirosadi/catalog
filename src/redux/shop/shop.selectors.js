import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectRelatedProductDetail = state => state.shop.relatedProduct;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectDetailProduct = createSelector(
  [selectShop],
  shop => shop.productDetail
);

export const selectRelatedProduct = createSelector(
  [selectRelatedProductDetail],
  relatedProduct => {
    const data = [];
    data.push(relatedProduct);
    return data;
  }
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );
