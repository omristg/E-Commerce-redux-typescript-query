import { CartItem } from "../models/CartItem.model"
import { formattedPrice } from "../services/util.service"
import { useAddToCart } from "./useAddToCart"
import { useDeleteItem } from "./useDeleteItem"
import { FaTrash } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

type Props = {
    item: CartItem
}

export const CartItemPreview = ({ item }: Props) => {

    const { id, title, image, quantity, price } = item

    const { mutate: addToCart } = useAddToCart()
    const { mutate: deleteItem } = useDeleteItem()

    const onChangeQuantity = (quantity: number) => {
        addToCart({ itemToAdd: item, quantity })
    }

    return (
        <div className="cart-item" key={id}>
            <div className="title">{title}</div>
            <div className="price">{formattedPrice(price)}</div>
            <img src={image} alt={title} />
            <div className="actions">
                <div className="counter">
                    <button onClick={() => onChangeQuantity(1)}>
                        <AiOutlinePlus />
                    </button>
                    <div>{quantity}</div>
                    <button
                        onClick={() => onChangeQuantity(-1)}
                        disabled={quantity! <= 1}
                    >
                        <AiOutlineMinus />
                    </button>
                </div>
                <button onClick={() => deleteItem(id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}