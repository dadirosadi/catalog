export const findRelatedProduct = (collections, category) => {
  return collections[category.toLowerCase()]
};