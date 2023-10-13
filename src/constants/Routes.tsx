import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import App from "../App";
import { useAppSelector } from "../redux/store";
const user = useAppSelector((state) => state.loginReducer.user);
export const router = createBrowserRouter([
	{ path: "/home*", element: <HomePage user={user} /> },
	{ path: "", element: <App /> },
]);
