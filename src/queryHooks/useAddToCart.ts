import { CartItem } from "../models/CartItem.model";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "./queryKeys";
import axios from "axios";

const addToCart = async ({ itemToAdd, quantity }: { itemToAdd: CartItem, quantity: number }) => {

    const { data: items } = await axios.get<CartItem[]>('http://localhost:5500/cart')
    if (!items) throw new Error('Cannot get items')

    const selectedItem = items.find(item => item.id === itemToAdd.id)
    if (!selectedItem) {
        itemToAdd.quantity = 1
        await axios.post('http://localhost:5500/cart', itemToAdd)
    } else {
        itemToAdd.quantity! = selectedItem.quantity! + quantity
        await axios.put(`http://localhost:5500/cart/${itemToAdd.id}`, itemToAdd)
    }

}


export const useAddToCart = () => {

    const queryClient = useQueryClient()

    const { mutate } = useMutation(addToCart, {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKeys.cartItems])
        }
    })
    return { mutate }
}