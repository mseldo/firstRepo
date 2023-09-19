import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ addToBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    
    <div>
        <div className="container mt-5">
  <div className="row">
    {products.map((product) => (
      <div className="col-md-4 mb-4" key={product._id}>
        <div className="card h-100">
          <img src={product.image} alt={product.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h6>Price: ${product.price}</h6>
            <button onClick={() => addToBasket(product)}>Add to Basket</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      
    </div>
  );
}

export default ProductList;
