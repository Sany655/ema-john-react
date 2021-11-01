import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import useCarts from '../../hooks/useCarts'
import { deleteFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import './Review.css'

function Review() {
    const history = useHistory()
    const [cart, setCart] = useCarts()
    const removeCartItem = key => {
        setCart(cart.filter(c => c.key !== key))
        deleteFromDb(key)
    }
    return (
        <div className='review'>
            <div>
                {
                    cart.map((c,i) => (
                        <div key={i}>
                            <h3>{c.name}</h3>
                            <p>Price : {c.price}</p>
                            <p>Quantity : {c.quantity}</p>
                            <p>Total Price : {c.quantity * c.price}</p>
                            <button className="btn" onClick={() => removeCartItem(c.key)}>Remove</button>
                        </div>
                    ))
                }
            </div>

            <Cart cart={cart}>
                <Link to='/shipping' className='btn'>Proceed To Shipping</Link>
                {/* <button
                    className="btn"
                    onClick={() => {
                        history.push('/shipping')
                    }}></button> */}
            </Cart>
        </div>
    )
}

export default Review
