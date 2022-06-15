import { CartItem } from "../models/CartItem.model";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "./queryKeys";
import axios from "axios";
import { toast } from "react-toastify";

type Arguments = { itemToAdd: CartItem, quantity: number }

export const addToCart = async ({ itemToAdd, quantity }: Arguments) => {
    try {
        const { data: items } = await axios.get<CartItem[]>('http://localhost:5500/cart')
        if (!items) throw new Error('Cannot get items')

        const selectedItem = items.find(item => item.id === itemToAdd.id)
        if (!selectedItem) {
            itemToAdd.quantity = 1
            await axios.post('http://localhost:5500/cart', itemToAdd)
        } else {
            itemToAdd.quantity = selectedItem.quantity! + quantity
            await axios.put(`http://localhost:5500/cart/${itemToAdd.id}`, itemToAdd)
        }
    } catch (error) {
        throw error
    }

}


export const useAddToCart = () => {

    const queryClient = useQueryClient()

    const { mutate } = useMutation(addToCart, {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKeys.cartItems])
            toast.success('Item added to cart!')
        }
    })
    return { mutate }
}


export const useOptimisticUpdateCart = () => {

    const queryClient = useQueryClient()

    const { mutate } = useMutation(addToCart, {
        onMutate: async (args: Arguments) => {
            const { itemToAdd, quantity } = args
            await queryClient.cancelQueries(queryKeys.cartItems)
            const prevData: CartItem[] | undefined = queryClient.getQueryData(queryKeys.cartItems)

            queryClient.setQueryData(queryKeys.cartItems, () => {
                if (!prevData) return
                return prevData.map(item => item.id === itemToAdd.id ? { ...itemToAdd, quantity: itemToAdd.quantity += quantity } : item)
            })

            return { prevData }

        },
        onError: (err, variables, context) => {
            if (!context?.prevData) return
            queryClient.setQueryData(queryKeys.cartItems, context.prevData)
            toast.error('Update failed, retrieving old data')
        },
        onSettled: () => {
            queryClient.invalidateQueries([queryKeys.cartItems])
        }
    })

    return { mutate }
}