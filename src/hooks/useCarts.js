import { useState } from "react"
import { useEffect } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCarts = products => {
    const [cart,setCart] = useState([])
    useEffect(() => {
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
    return [cart,setCart];
}

export default useCarts;