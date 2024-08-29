// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { fetchProducts } from '../services/api';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function getProducts() {
//       const data = await fetchProducts();
//       setProducts(data);
//     }
//     getProducts();
//   }, []);

//   return (
//     <div className="row row-cols-1 row-cols-md-3 g-4">
//       {products.map(product => (
//         <div key={product.id} className="col">
//           <ProductCard product={product} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;

import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map(product => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;