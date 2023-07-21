import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Cart.css'
import { getCart } from '../../redux/reducers/cart.reducer'

function Cart(props) {
    const cartRedux = useSelector(store => store.cart).cart;
    const dispatch = useDispatch();
    let totalQuantity = 0;
    let total = 0;
    useEffect(() => {
        dispatch(getCart());
    }, [])
    for (let product of cartRedux) {
        if (!product.quantity) {
            product={...product,quantity:1};
        }
        const price = product.quantity ? product.price * product.quantity : product.price;
        total += price;
        totalQuantity += product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order summery</h3>
            <p>Items ordered: {totalQuantity}</p>
            <div>
                <p><span>Total:</span><span>{total.toFixed(2)}</span></p>
                <p><span>Shipping:</span><span>{shipping}</span></p>
                <p><span>Tax:</span><span>{tax.toFixed(2)}</span></p>
                <h3><span>Grand Total:</span><span>{grandTotal.toFixed(2)}</span></h3>
            </div>
            {props.children}
        </div>
    )
}

export default Cart
