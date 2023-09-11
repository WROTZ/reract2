// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
return (
    <div className="product-item">
    <h3>{product.id}</h3>
    <h4>{product.title}</h4>
    <p>{product.description}</p>
    <p>{product.image}</p>
    <p>Price: ${product.price}</p>
    </div>
);
};

export default ProductItem;
