import * as React from 'react';
import './collection-preview.css'
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
      <h1 className='titleee'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items  
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
);
export default CollectionPreview;