/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ClipLoader } from "react-spinners";

const ProductList = ({ products, loading }) => {
  if (loading) return <ClipLoader />;

  return (
    <div className="product-list">
      {products.length ? (
        products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
