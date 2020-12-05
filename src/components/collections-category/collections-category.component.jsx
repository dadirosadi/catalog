import React from 'react';
import './collections-category.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionCategory = ({ collections, match }) => {
  return <div className='collections-overview'>
    <div className='collection-preview'>
      <h1 className='title'>{match.params.title.toUpperCase()}</h1>
      <div className='preview'>
        {
          collections
            .filter(collection => {
              return collection.title.toLowerCase() === match.params.title
            })
            .map(items => {
              return items.items.map(item => {
                return (
                  <CollectionItem key={item.id} item={item} />
                )
              })
            })}
      </div>
    </div>
  </div>

};

export default CollectionCategory;