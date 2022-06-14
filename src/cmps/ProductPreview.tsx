import React, { useState } from "react"
import { useNavigate } from "react-router"
import { Product } from "../models/Product.model"

type Props = {
    product: Product
}

export const ProductPreview = ({ product }: Props) => {

    const [isDescOpen, setIsDescOpen] = useState(false)
    const { title, price, description: desc, category: ctg, images } = product
    const navigate = useNavigate()

    const formattedPrice = () => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    }

    const onToggleDesc = (ev: React.MouseEvent) => {
        ev.stopPropagation()
        setIsDescOpen(prev => !prev)
    }

    return (
        <div className="product-preview" onClick={() => navigate(`/store/${product.id}`)}>
            <div className="title">{title}</div>
            <div className="price">Price: {formattedPrice()}</div>
            <div className="ctg">
                <span>Category:</span>
                <span>{ctg.name}</span>
            </div>
            <div className={`desc ${isDescOpen && 'open'}`}>
                <span>Description:</span>
                <span
                    onClick={onToggleDesc}
                >{desc}</span>
            </div>
            <div className="img-container">
                <img src={images[0]} alt={title} />
            </div>
        </div >
    )
}