import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import useCarts from '../../hooks/useCarts'
import { deleteFromCart } from '../../redux/reducers/cart.reducer'
import Cart from '../Cart/Cart'
import './Review.css'

function Review() {
    const cart = useSelector(store => store.cart).cart;
    const dispatch = useDispatch();

    return (
        <div className='review'>
            <div>
                {
                    !cart.length ? <h2 style={{ textAlign: 'center' }}>Nothing in cart to review</h2> : cart.map((c, i) => (
                        <div key={i}>
                            <h3>{c.name}</h3>
                            <p>Price : {c.price}</p>
                            <p>Quantity : {c.quantity}</p>
                            <p>Total Price : {c.quantity * c.price}</p>
                            <button className="btn" onClick={() => dispatch(deleteFromCart(c.key))}>Remove</button>
                        </div>
                    ))
                }
            </div>

            <Cart cart={cart}>
                {cart.length > 0 && <Link to='/shipping' className='btn'>Proceed To Shipping</Link>}

            </Cart>
        </div>
    )
}

export default Review
