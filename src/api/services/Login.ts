import axios from "axios";
import api from "../https";
const port = "44369";
const LoginService = {
	login: async (loggedUsername: string, loggedPassword: string) => {
		const profile = {
			username: loggedUsername,
			password: loggedPassword,
		};

		const token = await api.post(
			`/Login`,
			profile
		);

			window.localStorage.setItem("token", token.data);
	
		return token;
	},
};

export default LoginService;
