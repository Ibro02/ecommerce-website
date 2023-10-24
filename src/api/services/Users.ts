import axios from "axios";
import LoginService from "./Login";
import { headers } from "../https";

const config = {
	headers: { Authorization: `Bearer ${localStorage.token}` },
};
const port = "44369";
const UserService = {
	getUser: async (loggedUsername: string, loggedPassword: string) => {
		await LoginService.login(
			loggedUsername,
			loggedPassword
		);
		//@todo - make this auth like in zendev's project
		const users = await axios.get(`https://localhost:${port}/api/User`, config);
		let id;
		for (let i = 0; i < users.data.length; i++) {
			let loggedUser;
			if (users.data[i].username === loggedUsername) {
				loggedUser = users.data[i];
				id = loggedUser.id;
			}
		}
		localStorage.setItem("userId", id);
		const data = axios.get(
			`https://localhost:${port}/api/User/Get/${localStorage.userId}`,
			config
		);
		return data;
	},
	getUserWithToken: async () => {
		const data = axios.get(
			`https://localhost:${port}/api/User/Get/${localStorage.userId}`,
			config
		);
		return data;
	},
	getAllUsers: async () => {
		const url = `https://localhost:${port}/api/User/Get/${localStorage.userId}`;

		const { data } = await axios.get(url, config);

		return data;
	},
	postUser: async (newUser: object) => {
		const url = `https://localhost:${port}/api/User/Post`;
		try {
			const { data } = await axios.post(url, newUser);
			// //console.log(data)
			await UserService.getUser(data.username,data.password);
			localStorage.setItem("loggedUsername", data.username)
			localStorage.setItem("loggedPassword", data.password)
			localStorage.setItem("userId", data.id)
			return data;
		} catch (error) {
			alert(error);
		}
	},
	getAllUsernames: async () => {
		const url = `https://localhost:${port}/api/User/GetAllUsernames`;

		try {
			const { data } = await axios.get(url, { headers });

			return data;
		} catch (error) {
			alert(error);
		}
	},
};

export default UserService;
