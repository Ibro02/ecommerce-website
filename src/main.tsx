import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import { store } from "./redux/store.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { RouterProvider } from "react-router-dom";
import {createBrowserRouter} from "react-router-dom"
import { useAppSelector } from "./redux/store.ts";


 export const router = createBrowserRouter([
 	{ path: "/home/*", element: <HomePage /> },
 	{path: "", element: <App />}
 ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
		<RouterProvider  router={router}>
			<App />
		</RouterProvider>
		</Provider>
	</React.StrictMode>
);
