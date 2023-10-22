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
		//	//console.log(users.data);
		for (let i = 0; i < users.data.length; i++) {
			let loggedUser;
			if (users.data[i].username === loggedUsername) {
				loggedUser = users.data[i];
				////console.log(loggedUser);
				id = loggedUser.id;
				//console.log(id);
			}
		}
		localStorage.setItem("userId", id);

		//	//console.log(id);
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
		//	//console.log(data);

		return data;
	},
	postUser: async (newUser: object) => {
		const url = `https://localhost:${port}/api/User/Post`;
		try {
			const { data } = await axios.post(url, newUser);
			// //console.log(data)
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
