import { useNavigate, useParams } from "react-router"
import { useProduct } from '../queryHooks/useProduct'
import { MdOutlineArrowBack } from 'react-icons/md'

export const ProductDetails = () => {

    const { productId } = useParams()
    const { product } = useProduct(Number(productId))
    const navigate = useNavigate()

    if (!product) return <></>

    const { title, price, description: desc, category: ctg, images } = product

    const formattedPrice = () => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
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
            </div>
        </div>
    )
}