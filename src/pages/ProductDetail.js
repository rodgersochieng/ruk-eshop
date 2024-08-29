// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchProductById } from '../services/api';
// import { useCart } from '../hooks/useCart';

// function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     async function loadProduct() {
//       try {
//         const data = await fetchProductById(id);
//         setProduct(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load product details. Please try again later.');
//         setLoading(false);
//       }
//     }
//     loadProduct();
//   }, [id]);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="alert alert-danger">{error}</div>;
//   if (!product) return <div className="alert alert-warning">Product not found.</div>;

//   return (
//     <div className="row">
//       <div className="col-md-6">
//         <img src={product.image} alt={product.name} className="img-fluid" />
//       </div>
//       <div className="col-md-6">
//         <h2>{product.name}</h2>
//         <p className="lead">{product.description}</p>
//         <p className="fs-4">Price: ${product.price.toFixed(2)}</p>
//         <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhoneDetails } from '../services/api'; // Use the correct function here
import { useCart } from '../hooks/useCart';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getPhoneDetails(id); // Replace fetchProductById with getPhoneDetails
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!product) return <div className="alert alert-warning">Product not found.</div>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p className="lead">{product.description}</p>
        <p className="fs-4">Price: ${product.price.toFixed(2)}</p>
        <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
