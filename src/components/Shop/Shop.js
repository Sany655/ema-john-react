import React from 'react'
import { useHistory } from 'react-router-dom'
import { addToDb, getStoredCart } from '../../utilities/fakedb.js'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
function Shop() {
    const history = useHistory()
    const [cart, setCart] = React.useState([])
    const [products, setProducts] = React.useState([])
    const [search, setSearch] = React.useState([])
    React.useEffect(() => {
        fetch('./fakeData/products.json')
        .then(response=>response.json())
        .then(data=>{
            setProducts(data)
            setSearch(data)
        })
    }, [])
    React.useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (const key in savedCart) {
                const addedProduct = products.find(p => p.key === key)
                if (addedProduct) {
                    addedProduct.quantity = savedCart[key]
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
    }, [products])
    const handleAddToCart = (product) => {
        addToDb(product.key)
        let newCart;
        let cartItem = cart.find(c=>c.key===product.key)
        if(cartItem){
            newCart = cart.filter(c=>c.key!==product.key)
            cartItem.quantity += 1;
            newCart = [...newCart,cartItem]
        }
        else{
            newCart = [...cart,product]
        }
        setCart(newCart)
    }
    const handleSearch = prod => {
        setSearch(products.filter(product => product.name.toLowerCase().includes(prod.toLowerCase())));
    }
    return (
        <>
            <header>
                <form>
                    <input type="text" placeholder="type here to search" onChange={e => handleSearch(e.target.value)} />
                    {/* <a ><i>🛒 <span>0</span></i></a> */}
                </form>
            </header>
            <main>
                <section>
                    {
                        search.map((data, index) => <Product key={index} product={data} handleAddToCart={handleAddToCart} />)
                    }
                </section>
                <section>
                    <Cart cart={cart}>
                    <button className="btn" onClick={()=>history.push('/review')}>Review your order</button>
                    </Cart>
                </section>
            </main></>
    )
}

export default Shop
