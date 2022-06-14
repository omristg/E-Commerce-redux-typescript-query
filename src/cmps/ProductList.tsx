import { Product } from "../models/Product.model"
import { ProductPreview } from "./ProductPreview"

type Props = {
    products: Product[]
}

export const ProductList = ({ products }: Props) => {

    return (
        <div className="product-list">
            {products.slice(0, 20).map(product => (
                <ProductPreview key={product.id} product={product} />
            ))}
        </div>
    )
}