import React from 'react';
import './collection-item.styles.scss';

export default ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer" key={id}>
      <span className="name"> {name}</span>
      <span className="price"> {price}</span>
    </div>
  </div>
);
