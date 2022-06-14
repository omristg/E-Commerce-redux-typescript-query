import { useEffect, useState } from "react"
import axios from 'axios'
import { Product } from "../models/Product.model"
import { ProductList } from "../cmps/ProductList"
import { useProducts } from "../queryHooks/useProducts"


export const Store = () => {

    const { products } = useProducts()

    return (
        <div className="store">
            <ProductList products={products} />
        </div>
    )
}