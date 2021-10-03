import React from 'react'
import Rating from 'react-rating'
import './Product.css'

function Product(props) {
    const {img,name,seller,price,features,stock,star} = props.product
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
                        <div><Rating fullSymbol={<span>⭐</span>} emptySymbol={<span>⬜</span>} readonly initialRating={star}/></div>
                        <h4>Featurs</h4>
                        <ul>
                            {
                                features.map((feature,index)=><li key={index}>{feature.description}: {feature.value}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <button className="btn" onClick={()=>props.handleAddToCart(props.product)}>🛒 add to cart</button>
            </div>
        </div>
    )
}

export default Product
