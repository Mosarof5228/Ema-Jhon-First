import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart  //option 1
    // const { cart } = props //option 2
    const cart = props.cart;
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tex = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tex;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <h4>Selected Items: {cart.length} </h4>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tex.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;