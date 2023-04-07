import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, handleClearCart, children }) => {
    // const cart = props.cart  //option 1
    // const { cart } = props //option 2
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        //product.quantity jodi true hoy mane product.quantity=0 na hoy tahole product.quantity naw or product.quantity=1; dia daw.(0 is a falsy value.)
        product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tex = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tex;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <h4>Selected Items: {quantity} </h4>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tex.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;