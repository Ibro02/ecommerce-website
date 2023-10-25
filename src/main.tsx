import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import { store } from "./redux/store.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { Navigate, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile/Profile.tsx";

export const router = createBrowserRouter([
	{ path: "home/*", element: localStorage.token?<HomePage />:<Navigate to={'/'}/>,errorElement:<h1>404</h1>, children:
[
	{ path: "profile", element: <Profile/>,errorElement:<h1>404</h1>}
]},
	{ path: "", element: <App /> },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} fallbackElement={<h1>Haha</h1>}>
				<App />
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);
