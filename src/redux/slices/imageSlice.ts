import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";
export interface IImageGallery {
    [key: number]: string;
	imageUrl: string[];
}
const initialState: IImageGallery = {
	imageUrl: []
};
export const ImageSlice = createSlice({
	name: "images",
	initialState,
	reducers: {
		addImage: (state, action) => {
			state.imageUrl=action.payload;
		},
    
	},
});
export type RootState = ReturnType<typeof store.getState>;
export default ImageSlice.reducer;
export const { addImage } = ImageSlice.actions;
