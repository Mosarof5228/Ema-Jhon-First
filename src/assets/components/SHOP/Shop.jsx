import "./Shop.css";
import React, { useEffect, useState } from 'react';
import Product from "../PRODUCT/Product";
import Cart from "../CART/Cart";
import { addToDb, getShoppingCart } from "../../../utilities/fakedb";

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
    const storedCart = getShoppingCart();
    //step-4:
    const savedCart = [];
    //step-1 : get id from local storage object.
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
    setCart(newCart);
    addToDb(product.id)

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;