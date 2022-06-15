import { useState } from "react"
import { ProductList } from "../cmps/ProductList"
import { useProducts } from "../queryHooks/useProducts"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'


export const Store = () => {

    const [pageNum, setPageNum] = useState(0)
    const { products, isLoading } = useProducts(pageNum)



    return (
        <div className="store">
            <div className="pagination">
                <button
                    onClick={() => setPageNum(prev => prev - 1)}
                    disabled={pageNum <= 0}
                >
                    <GrFormPrevious />
                    <span>Prev</span>
                </button>
                <span>{pageNum}</span>
                <button onClick={() => setPageNum(prev => prev + 1)}>
                    <span>Next</span>
                    <GrFormNext />
                </button>
            </div>
            <ProductList products={products} isLoading={isLoading} />
        </div>
    )
}