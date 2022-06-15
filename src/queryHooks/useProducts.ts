import axios from "axios";
import { QueryFunctionContext, useQuery, useQueryClient } from "react-query";
import { Product } from "../models/Product.model";
import { queryKeys } from "./queryKeys";

const PRODUCTS_PER_PAGE = 10
const productsAPI = axios.create({
    baseURL: `https://api.escuelajs.co/api/v1/`,
})

const getProducts = async ({ queryKey }: QueryFunctionContext) => {
    const pageNum = Number(queryKey[1])
    const offset = pageNum * PRODUCTS_PER_PAGE
    const { data } = await productsAPI.get<Product[]>('products', {
        params: {
            offset,
            limit: PRODUCTS_PER_PAGE
        }
    })
    return data
}

const getAllProducts = async () => {
    const { data } = await productsAPI.get<Product[]>('products')
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
        },
        keepPreviousData: true
    })

    return { products, isLoading }
}

export const useProductsLength = () => {
    const { data: productsLength = 0 } = useQuery(
        queryKeys.allProducts,
        getAllProducts, {
        select: (products) => {
            return Math.floor((products.length - 1) / PRODUCTS_PER_PAGE)
        }

    })

    return { productsLength }
}