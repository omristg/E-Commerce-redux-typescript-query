import { useState } from "react"
import { Product } from "../models/Product.model"

type Props = {
    product: Product
}

export const ProductPreview = ({ product }: Props) => {

    const [isDescOpen, setIsDescOpen] = useState(false)
    const { title, price, description: desc, category: ctg, images } = product

    const formattedPrice = () => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    }

    return (
        <div className="product-preview">
            <div className="title">{title}</div>
            <div className="price">Price: {formattedPrice()}</div>
            <div className="ctg">
                <span>Category:</span>
                <span>{ctg.name}</span>
            </div>
            <div className={`desc ${isDescOpen && 'open'}`}>
                <span>Description:</span>
                <span
                    onClick={() => setIsDescOpen(prev => !prev)}
                >{desc}</span>
            </div>
            <div className="img-container">
                <img src={images[0]} alt={title} />
            </div>
        </div >
    )
}