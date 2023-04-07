import "./Shop.css";
import React, { useEffect, useState } from 'react';
import Product from "../PRODUCT/Product";
import Cart from "../CART/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  // console.log(cart)
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  useEffect(() => {
    //step-1 : get id from local storage object.
    const storedCart = getShoppingCart();
    //step-4:
    const savedCart = [];

    for (const id in storedCart) {
      //step-2 : get product by use id from products array of object
      const addedProduct = products.find(product => product.id === id)
      //step-3 : add quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //step-4 :add the added product to the saved cart
        savedCart.push(addedProduct)
      }
    }
    //step-5:set the cart
    setCart(savedCart)
  }, [products])


  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    //spread operator dia copy kora line er poriborte amra onno babe o korte pari.jmn:
    // let newCart = [];
    // const exists = cart.find(pd => pd.id === product.id);
    // if (!exists) {
    //   product.quantity = 1;
    //   newCart = [...cart, product]
    // }
    // else {
    //   exists.quantity = exists.quantity + 1;
    //   const remaining = cart.filter(pd => pd.id !== product.id);
    //   newCart = [...remaining, exists]
    // }
    //if product does not exist in the cart,then set quantity=1;
    //if exist update quantity by 1;
    setCart(newCart);
    addToDb(product.id)

  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart()
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
        <Cart
          cart={cart}
          handleClearCart={handleClearCart}
        >
          <Link to="/Orders">
            <button className="btn-order">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;