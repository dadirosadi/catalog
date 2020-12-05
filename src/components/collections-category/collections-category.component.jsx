import React from 'react';
import './collections-category.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionCategory = ({ collections, match, ...props }) => {
  return <div className='collections-overview'>
    <div className='collection-preview'>
      <h1 className='title-category'>{match.params.title.toUpperCase()}</h1>
      <div className='preview'>
        {
          collections
            .filter(collection => collection.title.toLowerCase() === match.params.title)
            .map(items => items.items.map(item => <CollectionItem key={item.id} item={item} {...props} category={match.params.title.toUpperCase()} />))
        }
      </div>
    </div>
  </div>

};

export default CollectionCategory;