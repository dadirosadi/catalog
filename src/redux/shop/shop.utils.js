export const findRelatedProduct = (collections, category) => {
  return collections.filter(data => {
    return data.routeName.toLowerCase() === category.toLowerCase()
  })
};