import React, { useState } from "react"
import { useNavigate } from "react-router"
import { BsFillCartPlusFill } from 'react-icons/bs'

import { CartItem } from "../models/CartItem.model"
import { Product } from "../models/Product.model"
import { formattedPrice } from "../services/util.service"
import { useAddToCart } from "../queryHooks/useAddToCart"

type Props = {
    product: Product
}

export const ProductPreview = ({ product }: Props) => {

    const [isDescOpen, setIsDescOpen] = useState(false)
    const { title, price, description: desc, category: ctg, images, id } = product
    const navigate = useNavigate()



    const { mutate: addToCart } = useAddToCart()

    const onToggleDesc = (ev: React.MouseEvent) => {
        ev.stopPropagation()
        setIsDescOpen(prev => !prev)
    }


    const onAddToCart = async () => {
        const itemToAdd: CartItem = {
            id,
            title,
            price,
            quantity: 1,
            image: images[0],
            categoryId: ctg.id
        }
        addToCart({ itemToAdd, quantity: 1 })
    }

    return (
        <div className="product-preview" onClick={() => navigate(`/store/${product.id}`)}>
            <div className="title">{title}</div>
            <div className="price">Price: {formattedPrice(price)}</div>
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

            <div className="actions">
                <button
                    className="btn-icon"
                    onClick={(ev) => {
                        ev.stopPropagation()
                        onAddToCart()
                    }}>
                    <BsFillCartPlusFill />
                    <span>Add</span>
                </button>
            </div>

        </div >
    )
}