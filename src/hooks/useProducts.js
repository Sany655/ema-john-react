import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios('./fakeData/products.json')
        .then(data=>{
            setProducts(data)
        })
    }, [])
    return [products]
}

export default useProducts;