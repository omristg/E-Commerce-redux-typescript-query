import { useState } from "react"
import { ProductList } from "../cmps/ProductList"
import { useProductsLength, useProducts } from "../queryHooks/useProducts"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'


export const Store = () => {

    const [pageNum, setPageNum] = useState(0)
    const { products, isLoading } = useProducts(pageNum)
    const { productsLength } = useProductsLength()

    return (
        <div className="store">
            <div className="pagination">
                <button
                    className="btn-icon"
                    onClick={() => setPageNum(prev => prev - 1)}
                    disabled={pageNum <= 0}
                >
                    <GrFormPrevious />
                    <span>Prev</span>
                </button>
                <span>{pageNum + 1}</span>
                <button
                    className="btn-icon"
                    onClick={() => setPageNum(prev => prev + 1)}
                    disabled={pageNum >= productsLength}
                >
                    <span>Next</span>
                    <GrFormNext />
                </button>
            </div>
            <ProductList products={products} isLoading={isLoading} />
        </div>
    )
}