import { CartItem } from "../models/CartItem.model"
import { CartItemPreview } from "./CartItemPreview"

type Props = {
    cartItems: CartItem[]
}

export const CartItemList = ({ cartItems }: Props) => {

    return (
        <div className="cart-list">
            {cartItems.map(item => (
                <CartItemPreview key={item.id} item={item} />
            ))}
        </div>
    )
}