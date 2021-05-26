import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
const Review = () => {

    const[cart , setCart ]= useState([]);
    
 const removeProduct =( productKey) =>{
const newCart = cart.filter( pd => pd.key !== productKey);
  setCart (newCart);
    console.log( 'click',productKey);
    removeFromDatabaseCart(productKey);
 }

    useEffect(() =>{
  const saveCart = getDatabaseCart();
const productKeys = Object.keys(saveCart);
 
const cartProducts = productKeys.map( key => {
    const product = fakeData.find(pd => pd.key === key);
product.quantity = saveCart[key];
    return product;
});
// console.log(cartProducts);
setCart(cartProducts);
    },[])

    return (
        <div className=" twin-container">
            {/* <h1>Cart Item: {cart.length}</h1> */}
       
    <div className=" product-container">
    {
          cart.map(pd =>  <ReviewItem
            key={pd.key}
            removeProduct = {removeProduct}
              product={pd}></ReviewItem>)
      }
    </div>
<div className="cart-container">

<Cart cart={cart}></Cart>
</div>


        </div>
    );
};

export default Review;