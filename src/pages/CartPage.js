import React from 'react';
import { useCart } from '../hooks/useCart';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="alert alert-info">Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                 {/* <p className="card-text">Price: ${item.price.toFixed(2)}</p>  */}
                {cartItems.map(item => (
                 <p>${item.price ? item.price.toFixed(2) : 'Price not available'}</p>))}

                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-sm btn-secondary ms-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="btn btn-danger mt-2" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h2>Total: ${total.toFixed(2)}</h2>
        <div>
          <button className="btn btn-secondary me-2" onClick={clearCart}>Clear Cart</button>
          <button className="btn btn-success">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;