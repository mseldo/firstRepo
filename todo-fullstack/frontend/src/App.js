import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeFromBasket = (productId) => {
    const newBasket = basket.filter(product => product._id !== productId);
    setBasket(newBasket);
  };

  return (
    <div>
      <Navbar />
      <ProductList addToBasket={addToBasket} />
      <Basket basket={basket} removeFromBasket={removeFromBasket} />
      <Footer />
    </div>
  );
}

export default App;

