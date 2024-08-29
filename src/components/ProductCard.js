import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        {/* <p className="card-text">${product.price.toFixed(2)}</p> */}
        <p>${product.price ? product.price.toFixed(2) : 'Price not available'}</p>

        <div className="mt-auto">
          <Link to={`/products/${product.id}`} className="btn btn-primary me-2">View Details</Link>
          <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;