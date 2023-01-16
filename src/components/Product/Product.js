import React from 'react';
// import ReactDOM from 'react-dom';
// import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, star} = props.product;
    // const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-align'>
                <h4 className='product-name'>{name}</h4>
                <p>by: {seller}</p>
                <p>Price: {price}</p>
                <p>only <mark>{stock}</mark> left in stock - order soon</p>
                <Rating 
                    initialRating={star}
                    emptySymbol="fa-regular fa-star icon-color"
                    fullSymbol="fa-solid fa-star icon-color"
                    readonly></Rating>
                <br />
                <button 
                onClick={
                    () => props.handleAddToCart(props.product)
                    } className='btn-regular'>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                    </button>
            </div>
        </div>
    );
};

export default Product;
