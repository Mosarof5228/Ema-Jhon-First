import "./Shop.css";
import React, { useEffect, useState } from 'react';
import Product from "../PRODUCT/Product";

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  // function handler(props) {
  //   const newProducts = [...cart + 1]
  //   setCart(newProducts)
  // }
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className="cart-container">
        <h4>Selected Items: {cart.length} </h4>
      </div>
    </div>
  );
};

export default Shop;