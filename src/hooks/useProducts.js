import { useEffect } from "react"
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./fakeData/products.JSON')
        .then(response=>response.json())
        .then(data=>{
            setProducts(data)
        })
    }, [])
    return [products]
}

export default useProducts;