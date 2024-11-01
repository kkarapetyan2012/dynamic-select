/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ClipLoader } from "react-spinners";

const ProductList = ({ products, loading }) => {
  if (loading) return <ClipLoader />;

  return (
    <div className="d-flex flex-wrap">
      {products.length ? (
        products.map(product => (
          <div key={product.id} className="col-lg-4 col-sm-6 col-12 p-xxs product-item">
            <div className="col-12 p-1 text-center border-primary border product-block ">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default ProductList;
