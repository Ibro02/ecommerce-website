import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import App from "../App";
import { useAppSelector } from "../redux/store";

export const router = createBrowserRouter([
	{ path: "/home*", element: <HomePage /> },
	{ path: "", element: <App /> },
]);
