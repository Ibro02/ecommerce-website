import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
import { IProduct } from "../../api/services/Products";

const initialState: IProduct = {
name: "",
description: "",
price: 0,
productCategoryId: 1,
statusId: 1,
productImageId: null,
unitsInStocks: 1
};
export const ProductSlice = createSlice({
	name: "images",
    initialState,
	reducers: {
		addNewProduct: (state, action) => {
			state=action.payload;
		},
    
	},
});
export type RootState = ReturnType<typeof store.getState>;
export default ProductSlice.reducer;
export const { addNewProduct } = ProductSlice.actions;
