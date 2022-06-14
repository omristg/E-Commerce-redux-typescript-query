import axios from "axios";
import { useQuery } from "react-query";
import { Product } from "../models/Product.model";
import { queryKeys } from "./queryKeys";

const getProducts = async () => {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    return data
}

export const useProducts = () => {

    const fallback: Product[] = []
    const { data: products = fallback, isLoading } = useQuery(queryKeys.products, getProducts)

    return { products, isLoading }
}