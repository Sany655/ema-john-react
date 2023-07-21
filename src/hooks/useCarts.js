import { useState } from "react"
import { useEffect } from "react"
import { getStoredCart } from "../utilities/fakedb"
import axios from "axios";
const useCarts = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);
        axios.post('/products/byKeys', JSON.stringify(keys))
            .then(products => {
                if (products.length) {
                    const storedCart = [];
                    for (const key in savedCart) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            })
    }, []);
    return [cart, setCart];
}

export default useCarts;