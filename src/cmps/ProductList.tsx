import { Product } from "../models/Product.model"
import { Loader } from "./Loader"
import { ProductPreview } from "./ProductPreview"

type Props = {
    products: Product[]
    isLoading: boolean
}

export const ProductList = ({ products, isLoading }: Props) => {

    if (isLoading) return <Loader />

    return (
        <div className="product-list">
            {products.slice(0, 20).map(product => (
                <ProductPreview key={product.id} product={product} />
            ))}
        </div>
    )
}