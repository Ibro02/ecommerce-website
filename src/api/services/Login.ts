import axios from "axios";
import React from "react";
import Button from "../../components/common/button/Button";

interface APIReq {
	text: string;
}
const port = "44369";
const LoginService = {
	login: async (loggedUsername: string, loggedPassword: string) => {
		const profile = {
			username: loggedUsername,
			password: loggedPassword,
		};
	
		console.log(profile);
		const token = axios.post(`https://localhost:${port}/api/Login`, profile);

		return token;
	},
};

export default LoginService;
