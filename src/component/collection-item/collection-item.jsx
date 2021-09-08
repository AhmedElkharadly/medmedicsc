import React from 'react';
import './collection-item.css';


const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
    <span className='name' key={id}>{name}</span>
    <span className='name' key={id}>{price}</span>

    </div>
  </div>
);

export default CollectionItem;