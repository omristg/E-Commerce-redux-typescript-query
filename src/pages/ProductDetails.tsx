import { useNavigate, useParams } from "react-router"
import { useProduct } from '../queryHooks/useProduct'
import { MdOutlineArrowBack } from 'react-icons/md'
import { BsFillCartPlusFill } from "react-icons/bs"
import { useAddToCart } from "../queryHooks/useAddToCart"
import { CartItem } from "../models/CartItem.model"

export const ProductDetails = () => {

    const { productId } = useParams()
    const { product } = useProduct(Number(productId))
    const { mutate: addToCart } = useAddToCart()
    const navigate = useNavigate()

    if (!product) return <></>

    const { id, title, price, description: desc, category: ctg, images } = product

    const formattedPrice = () => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
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
        <div className="product-details">
            <div className="actions">
                <button onClick={() => navigate(-1)} className="btn-back">
                    <MdOutlineArrowBack />
                    <span>Back</span>
                </button>
            </div>
            <div className="content">
                <div className="title">{title}</div>
                <div className="price">Price: {formattedPrice()}</div>
                <div className="ctg">
                    <span>Category:</span>
                    <span>{ctg.name}</span>
                </div>
                <div className="desc">
                    <span>Description:</span>
                    <span
                    >{desc}</span>
                </div>
                <div className="img-container">
                    <img src={images[0]} alt={title} />
                </div>
                <div className="actions">
                    <button
                        className="btn-icon"
                        onClick={onAddToCart}>
                        <BsFillCartPlusFill />
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    )
}