import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../Store/cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return ( 
    <>
      <div className="container">
        <h2 className="mt-4">Cart</h2>
        { cartItems.length === 0 ? <h3>Cart is empty</h3> : (
          <>
            <ul className='list-group'>
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content">
                  <div>{item.title} INR {item.price} X {item.quantity} = INR {item.price * item.quantity}</div> 
                  <div>
                  <button className='btn btn-sm btn-success ' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button className='btn btn-sm btn-warning mx-2' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <button className='btn btn-danger mx-2' onClick={() => dispatch(removeFromCart(item.id))}>Remove Product</button>
                  </div>
                  
                </li>
              ))}
            </ul>
            <h3>Total Amount: {totalAmount.toFixed(2)}</h3>
            <button className="btn btn-warning" onClick={() => dispatch(clearCart())}>Clear cart</button>
          </>
        ) }

      </div>
    </>
  )
}

export default Cart