import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        // console.log(product.price, product.quantiry);
        if(!product.quantiry){
            product.quantiry = 1;
        }
        // console.log(product)
       total = total + product.price * product.quantiry;
       console.log(total);
       totalQuantity = totalQuantity + product.quantiry;
       console.log(totalQuantity);
    //    total + totalQuantity + 
    }
    const shipping = total > 0 ? 15: 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;