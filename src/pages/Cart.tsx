import { CartItem } from "../models/CartItem.model"
import { useAddToCart } from "../queryHooks/useAddToCart"
import { useCartItems } from "../queryHooks/useCartItems"
import { formattedPrice } from "../services/util.service"

export const Cart = () => {

    const { cartItems } = useCartItems()

    const { mutate: addToCart } = useAddToCart()

    const onChangeQuantity = (itemToAdd: CartItem, quantity: number) => {
        addToCart({ itemToAdd, quantity })
    }

    return (
        <div className="cart">
            <div className="cart-list">
                {cartItems.map(item => {
                    const { id, title, price, image, quantity } = item
                    return (
                        <div className="cart-item" key={id}>
                            <div className="title">{title}</div>
                            <div className="price">{formattedPrice(price)}</div>
                            <img src={image} alt={title} />
                            <div className="actions">
                                <div className="counter">
                                    <button onClick={() => onChangeQuantity(item, 1)}>+</button>
                                    <div>{quantity}</div>
                                    <button
                                        onClick={() => onChangeQuantity(item, -1)}
                                        disabled={quantity! <= 1}
                                    >-</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}