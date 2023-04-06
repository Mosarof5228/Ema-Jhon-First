import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product }) => {
    const { id, img, price, name, quantity } = product;
    console.log(product)
    return (
        <div className='reviews-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='title'>Name: {name}</p>
                <p>Price: <span className='orange-text'>$ {price}</span></p>
                <p>Price: <span className='orange-text'> {quantity}</span></p>
            </div>
            <button className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;