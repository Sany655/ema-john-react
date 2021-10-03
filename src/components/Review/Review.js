import React from 'react'
import { useHistory } from 'react-router-dom'
import useCarts from '../../hooks/useCarts'
import useProducts from '../../hooks/useProducts'
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import './Review.css'

function Review() {
    const history = useHistory()
    const [products] = useProducts()
    const [cart, setCart] = useCarts(products)
    const removeCartItem = key => {
        setCart(cart.filter(c => c.key !== key))
        deleteFromDb(key)
    }
    return (
        <div className='review'>
            <div>
                {
                    cart.map(c => (
                        <div>
                            <h3>{c.name}</h3>
                            <p>Price : {c.price}</p>
                            <p>Quantity : {c.quantity}</p>
                            <p>Total Price : {c.quantity * c.price}</p>
                            <buttin className="btn" onClick={() => removeCartItem(c.key)}>Remove</buttin>
                        </div>
                    ))
                }
            </div>

            <Cart cart={cart}>
                <button
                    className="btn"
                    onClick={() => {
                        clearTheCart()
                        setCart([])
                        history.push('/order')
                    }}>Place order</button>
            </Cart>
        </div>
    )
}

export default Review
