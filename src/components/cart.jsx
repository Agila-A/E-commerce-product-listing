import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types'; 

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-popup">
      <h2>Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <p>{item.name} - ${item.price}</p>
                <button onClick={() => removeFromCart(index)}>
                  <FaTrashAlt /> Remove
                </button>
              </div>
            ))}
            <h3>Total: Rs{total}</h3>
          </>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
