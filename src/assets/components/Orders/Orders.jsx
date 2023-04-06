import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../CART/Cart';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h4>all products here:{cart.length}</h4>
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;