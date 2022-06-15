import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { queryKeys } from "./queryKeys"
import { toast } from "react-toastify"

const deleteItem = async (itemId: number) => {
    if (!itemId) throw new Error('Item ID has not supplied')
    return await axios.delete(`http://localhost:5500/cart/${itemId}`)
}


export const useDeleteItem = () => {

    const queryClient = useQueryClient()

    return useMutation(deleteItem, {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKeys.cartItems])
            toast.success('Item removed!')
        }
    })

}