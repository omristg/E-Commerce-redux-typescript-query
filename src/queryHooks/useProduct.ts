import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { Product } from "../models/Product.model";
import { queryKeys } from "./queryKeys";

const getProduct = async (productId: number) => {
    const { data } = await axios.get<Product>(`https://api.escuelajs.co/api/v1/products/${productId}`)
    return data
}


export const useProduct = (productId: number) => {

    const queryClient = useQueryClient()

    const { data: product = null } = useQuery([queryKeys.products, productId], () => getProduct(productId), {
        initialData: () => {
            const products: Product[] | undefined = queryClient.getQueryData(queryKeys.products)
            if (!products) return undefined
            return products.find(product => product.id === productId)
        }
    })

    return { product }
}