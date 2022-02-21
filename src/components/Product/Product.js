import React from 'react'
import './Product.css'
import { addToCart } from '../../redux/reducers/cart.reducer';
import { useDispatch } from 'react-redux';

function Product(props) {
    const {img,name,seller,price,features,stock,star} = props.product;
    const dispatch = useDispatch();
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <div>
                    <div>
                        <p>By: {seller}</p>
                        <p>${price}</p>
                        <p>Only {stock} left in stock - order soon</p>
                    </div>
                    <div>
                        <div>{star/5}</div>
                        <h4>Featurs</h4>
                        <ul>
                            {
                                features.map((feature,index)=><li key={index}>{feature.description}: {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <button className="btn" onClick={()=>dispatch(addToCart(props.product))}>🛒 add to cart</button>
            </div>
        </div>
    )
}

export default Product
