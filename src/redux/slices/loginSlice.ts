import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

export interface Login {
	user: { username: string; password: string, token?: object };
}
const initialState: Login = {
	user: { username: "", password: "", token: {headers: ""} },
};
export const LoginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		getLogInfo: (state, action) => {
			state.user = action.payload;
		},
		getUsername: (state, action) => {
			state.user.username = action.payload;
		},
		getPassword: (state, action) => {
			state.user.password = action.payload;
		},
		getToken: (state, action)=>
		{
			state.user.token = action.payload;
		}
	},
});
export type RootState = ReturnType<typeof store.getState>;
export default LoginSlice.reducer;
export const { getLogInfo, getPassword, getUsername,getToken } = LoginSlice.actions;
