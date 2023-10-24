import axios from "axios";

const port = "44369";
const LoginService = {
	login: async (loggedUsername: string, loggedPassword: string) => {
		const profile = {
			username: loggedUsername,
			password: loggedPassword,
		};

		const token = await axios.post(
			`https://localhost:${port}/api/Login`,
			profile
		);
		if (token.data.length > 0) {
			window.localStorage.setItem("token", token.data);
		}
		return token;
	},
};

export default LoginService;
