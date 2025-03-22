import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../Store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Checkout = () => {
    const [user, setUser] = useState(null);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => {
            if (!currentUser) {
                navigate('/login');
            } else {
                setUser(currentUser);
            }
        });
    }, [navigate]);

    const handleCheckout = () => {
        alert('Order placed successfully !!');
        dispatch(clearCart());
        navigate('/order');
    };

    return (
        <div className='container'>
            <h2 className='mt-4'>Checkout</h2>
            {user ? <p>Logged in as: {user.email}</p> : <p>Redirected to login</p>}
            <h3>Total Amount: {totalAmount.toFixed(2)}</h3>
            <button className='btn btn-success mt-3' onClick={handleCheckout}>
                Place Order
            </button>
        </div>
    );
};

export default Checkout