import { useState } from 'react';
import PropTypes from 'prop-types'; 
import { products } from '../data/products';
import { FaShoppingCart } from 'react-icons/fa';

const ProductListing = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    // Reset the selected category each time a new category is chosen
    setSelectedCategory(category);
  };

  // Filter the products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products // If 'All' is selected, display all products
    : products.filter(product => product.category === selectedCategory); // Otherwise, filter by category

  return (
    <div>
      <h1>Products</h1>
      <div>
        {/* Category filter buttons */}
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Electronics')}>Electronics</button>
        <button onClick={() => handleCategoryChange('Clothing')}>Clothing</button>
        <button onClick={() => handleCategoryChange('Home Goods')}>Home Goods</button>
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <h2>{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: Rs{product.price}</p>
              <button onClick={() => addToCart(product)}>
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p> // Display if no products match the filter
        )}
      </div>
    </div>
  );
};

// Define PropTypes for ProductListing
ProductListing.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductListing;

