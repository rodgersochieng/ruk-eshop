// import React, { useState, useEffect } from 'react';
// import ProductList from '../components/ProductList';
// import { fetchProducts } from '../services/api';

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load products. Please try again later.');
//         setLoading(false);
//       }
//     }
//     loadProducts();
//   }, []);

//   if (loading) return <div className="text-center">Loading...</div>;
//   if (error) return <div className="alert alert-danger">{error}</div>;

//   return (
//     <div className="home">
//       <h1 className="text-center mb-4">Welcome to Ruk E-shop</h1>
//       <ProductList products={products} />
//     </div>
//   );
// }

// export default Home;



import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { listBrands } from '../services/api'; // Use the correct function here

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await listBrands(); // Replace fetchProducts with listBrands
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="home">
      <h1 className="text-center mb-4">Welcome to Ruk E-shop</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
