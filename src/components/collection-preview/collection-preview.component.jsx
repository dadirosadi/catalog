import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ notShow, title, items, ...props }) => (
  <div className='collection-preview'>
    {
      notShow || <h1 className='title' onClick={() => { props.history.push(`${title.toLowerCase()}`) }}>{title.toUpperCase()}</h1>

    }
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} {...props} category={title} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
