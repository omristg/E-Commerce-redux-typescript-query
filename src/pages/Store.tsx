import { useEffect, useState } from "react"
import axios from 'axios'
import { Product } from "../models/Product.model"
import { ProductList } from "../cmps/ProductList"

export const Store = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
            setProducts(data)

        })();
    }, [])


    return (
        <div className="store">
            <ProductList products={products} />
        </div>
    )
}