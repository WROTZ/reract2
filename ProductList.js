// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    // Fetch data from an API (replace with your API URL)
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);

return (
    <div className="product-list">
    <h2>Product List</h2>
    {products.map((product) => (
        <ProductItem key={product.id} product={product} />
    ))}
    </div>
);
};

export default ProductList;
