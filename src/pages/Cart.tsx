import { CartItemList } from "../queryHooks/CartItemList"
import { useCartItems } from "../queryHooks/useCartItems"

export const Cart = () => {

    const { cartItems } = useCartItems()

    return (
        <div className="cart">
            <CartItemList cartItems={cartItems} />
        </div>
    )
}