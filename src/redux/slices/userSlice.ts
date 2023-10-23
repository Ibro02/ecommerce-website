import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

export interface User {
	user: { username: string; password: string, cityId: number, description: string, email: string, firstName: string, id: number|null, lastName: string, roleId: number };
}

const initialState = 
{
    user:
    {
        username: "", password: "", cityId: 1, description: "", email: "", firstName: "", id: null, lastName: "", roleId: 2
    }
}

export const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUserInfo: (state, action) => {
			state.user = action.payload;
		},
	},
});
export type RootState = ReturnType<typeof store.getState>;
export default UserSlice.reducer;
export const { getUserInfo } = UserSlice.actions;
