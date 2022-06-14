import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartItem } from "../models/CartItem.model";

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
})

export default cartSlice.reducer