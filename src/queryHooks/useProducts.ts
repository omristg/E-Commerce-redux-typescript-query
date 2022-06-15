import axios from "axios";
import { QueryFunctionContext, useQuery, useQueryClient } from "react-query";
import { Product } from "../models/Product.model";
import { queryKeys } from "./queryKeys";

const PRODUCTS_PER_PAGE = 10
const productsAPI = axios.create({
    baseURL: `https://api.escuelajs.co/api/v1/`,
})

const getProducts = async ({ queryKey }: QueryFunctionContext) => {
    const pageNum = queryKey[1]
    const { data } = await productsAPI.get<Product[]>('products', {
        params: {
            offset: pageNum,
            limit: PRODUCTS_PER_PAGE
        }
    })
    return data
}

export const useProducts = (pageNum: number) => {

    const queryClient = useQueryClient()

    const fallback: Product[] = []
    const { data: products = fallback, isLoading } = useQuery(
        [queryKeys.products, pageNum],
        getProducts, {
        onSuccess: () => {
            const nextPage = pageNum + 1
            queryClient.prefetchQuery([queryKeys.products, nextPage], getProducts)
        }
    })

    return { products, isLoading }
}