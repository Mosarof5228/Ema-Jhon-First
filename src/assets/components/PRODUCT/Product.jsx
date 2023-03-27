import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const handleAddToCart = props.handleAddToCart;
    // console.log(props.product)
    const { name, price, seller, ratings, img } = props.product;

    return (
        <div className='product'>
            <img src={img}
                alt="" />
            <div>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <div className='rating-manufac'>
                <p className='rating'>Rating: {ratings}Star</p>
                <p className='manufac'>Manuracturer: {seller}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-add-to-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};
export default Product;

