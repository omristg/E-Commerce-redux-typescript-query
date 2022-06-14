import axios from "axios"
import { useQuery } from "react-query"
import { CartItem } from "../models/CartItem.model"
import { queryKeys } from "./queryKeys"

const getItems = async () => {
    const { data } = await axios.get<CartItem[]>('http://localhost:5500/cart')
    return data
}

export const useCartItems = () => {
    const fallback: CartItem[] = []
    const { data: cartItems = fallback, isLoading } = useQuery([queryKeys.cartItems], getItems)

    return { cartItems, isLoading }
}