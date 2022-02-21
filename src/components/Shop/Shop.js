import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useCarts from '../../hooks/useCarts.js'
import { getProducts, changePageNo, searchProducts } from '../../redux/reducers/products.reducer.js'
import { addToDb, getStoredCart } from '../../utilities/fakedb.js'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
function Shop() {
    const dispatch = useDispatch();
    const history = useHistory()

    const loading = useSelector(store => store.products).loading;
    const error = useSelector(store => store.products).error;
    const pageNoRedux = useSelector(store => store.products).pageNo;
    const currentPageNoRedux = useSelector(store => store.products).currentPageNo;
    const searchRedux = useSelector(store => store.products).search;
    const searchProductsRedux = useSelector(store => store.products).searchProducts;
    const searchStatus = useSelector(store => store.products).searchStatus;
    
    useEffect(() => {
        dispatch(getProducts(currentPageNoRedux));
    }, [currentPageNoRedux])

    return (
        <>
            <header>
                <form>
                    <input value={searchRedux} type="text" placeholder="type here to search" onChange={e => dispatch(searchProducts(e.target.value))} />
                </form>
            </header>
            <main>
                <section>
                    {
                        loading ? (
                            <h1>Loading....</h1>
                        ) : (
                            error ? (
                                <h4>{error}</h4>
                            ) : (
                                searchProductsRedux.map((product, index) => (
                                    <Product key={index} product={product} />
                                ))
                            )
                        )
                    }
                    <div style={pagination}>
                        {   searchStatus ||
                            [...Array(pageNoRedux).keys()].map((i) => <button key={i} style={currentPageNoRedux === i ? curPagiBtn : pagiBtn} onClick={() => dispatch(changePageNo(i))}>{i + 1}</button>)
                        }
                    </div>
                </section>
                <section>
                    <Cart>
                        <button className="btn" onClick={() => history.push('/review')}>Review your order</button>
                    </Cart>
                </section>
            </main></>
    )
}

const pagination = {
    margin: 5,
    textAlign:"right",
    // padding:10
}

const pagiBtn = {
    margin: 5,
    padding: 10,
    border: 'none',
    cursor: 'pointer'
}

const curPagiBtn = {
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 10,
    border: 'none',
    cursor: 'pointer'
}

export default Shop
