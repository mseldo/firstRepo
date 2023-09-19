function Basket({ basket, removeFromBasket }) {
    return (
      <div>
        {basket.map(product => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => removeFromBasket(product._id)}>Remove</button>
          </div>
        ))}
        <p>Total: ${basket.reduce((total, product) => total + product.price, 0)}</p>
      </div>
    );
  }
  
  export default Basket;
  