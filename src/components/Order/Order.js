import React from 'react'
import { useHistory } from 'react-router-dom'
import useCarts from '../../hooks/useCarts'
import useProducts from '../../hooks/useProducts'
import gliphicon from '../../images/giphy.gif'
import Cart from '../Cart/Cart'
function Order() {
    const [products] = useProducts()
    const [cart] = useCarts(products)
    const history = useHistory()
    return (
        <div>
            <img src={gliphicon} style={{width:'350px',height:'250px',display:'block',margin:'auto'}} alt="" />
            <Cart cart={cart}>
            <button className="btn" onClick={()=>history.push('/')}>Shop more</button>
            </Cart>
        </div>
    )
}

export default Order
