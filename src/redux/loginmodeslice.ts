import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store";
import { PayloadAction } from "@reduxjs/toolkit";
export interface Mode {
	logIn: boolean;
}
const initialState: Mode = {
	logIn: false,
};
export const ModeSlice = createSlice({
	name: "mode",
	initialState,
	reducers: {
		changeMode: (state, action) => {
			state.logIn = action.payload;
		},
	},
});
export type RootState = ReturnType<typeof store.getState>;
export default ModeSlice.reducer;
export const { changeMode } = ModeSlice.actions;
