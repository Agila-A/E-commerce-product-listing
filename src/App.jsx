import { useState } from 'react';
import ProductListing from './components/ProductListing';
import Cart from './components/cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div>
      {/* Cart button at the top */}
      <button onClick={toggleCartVisibility} className="cart-toggle-button">
        Cart ({cartItems.length})
      </button>

      {/* Conditionally show cart */}
      {isCartVisible && (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      )}

      {/* Product Listing */}
      <ProductListing addToCart={addToCart} />
    </div>
  );
};

export default App;
