import axios from "axios"
import { useQuery } from "react-query"
import { CartItem } from "../models/CartItem.model"
import { queryKeys } from "./queryKeys"

const getItems = async (signal: AbortSignal | undefined) => {
    const { data } = await axios.get<CartItem[]>('http://localhost:5500/cart', {
        signal
    })
    return data
}

export const useCartItems = () => {
    const fallback: CartItem[] = []
    const { data: cartItems = fallback, isLoading } = useQuery([queryKeys.cartItems], ({ signal }) => getItems(signal))

    return { cartItems, isLoading }
}