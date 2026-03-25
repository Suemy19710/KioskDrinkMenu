import React, { useState } from "react";
import "./App.css";

const drinksData = [
  { id: 1, name: "Coca Cola", price: 2.5, image: "🥤" },
  { id: 2, name: "Orange Juice", price: 3.0, image: "🧃" },
  { id: 3, name: "Water", price: 1.5, image: "💧" },
  { id: 4, name: "Coffee", price: 2.8, image: "☕" },
  { id: 5, name: "Milk Tea", price: 3.5, image: "🧋" },
  { id: 6, name: "Lemon Soda", price: 3.2, image: "🍋" },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (drink) => {
    const existing = cart.find((item) => item.id === drink.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === drink.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...drink, quantity: 1 }]);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="app">
      <header className="header">
        <button className="nav-btn">Back</button>
        <h1>Drink Menu</h1>
        <div className="cart-info">Cart: {totalItems}</div>
      </header>

      <main className="main-content">
        <section className="menu-grid">
          {drinksData.map((drink) => (
            <div className="drink-card" key={drink.id}>
              <div className="drink-image">{drink.image}</div>
              <div className="drink-name">{drink.name}</div>
              <div className="drink-price">€{drink.price.toFixed(2)}</div>
              <button
                className="add-btn"
                onClick={() => addToCart(drink)}
              >
                Add
              </button>
            </div>
          ))}
        </section>

        <aside className="cart-panel">
          <h2>Your Order</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">No drinks selected</p>
          ) : (
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                </div>
              ))}
            </div>
          )}

          <div className="cart-total">
            <p>Total: €{totalPrice.toFixed(2)}</p>
          </div>

          <button className="checkout-btn">Checkout</button>
        </aside>
      </main>
    </div>
  );
}