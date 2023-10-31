import axios from "axios";
import LoginService from "./Login";
import { headers } from "../https";
import api from "../https";

interface IUserObject {
	username?: string;
	password?: string;
	cityId?: number;
	description?: string;
	email?: string;
	firstName?: string;
	id?: number | null;
	lastName?: string;
}
const config = {
	headers: { Authorization: `Bearer ${localStorage.token}` },
};
export const port = "44369";
const UserService = {
	getUser: async (loggedUsername: string, loggedPassword: string) => {
		await LoginService.login(loggedUsername, loggedPassword);
		//@todo - make this auth like in zendev's project
		const users = await api.get(`/User`);
		let id;
		for (let i = 0; i < users.data.length; i++) {
			let loggedUser;
			if (users.data[i].username === loggedUsername) {
				loggedUser = users.data[i];
				id = loggedUser.id;
			}
		}
		localStorage.setItem("userId", id);
		const data = api.get(`/User/Get/${localStorage.userId}`);
		return data;
	},
	getUserWithToken: async () => {
		const data = api.get(`/User/Get/${localStorage.userId}`);
		return data;
	},
	getAllUsers: async () => {
		const url = `/User/Get/${localStorage.userId}`;

		const { data } = await api.get(url);

		return data;
	},
	postUser: async (newUser: object) => {
		const url = `/User/Post`;
		try {
			const { data } = await api.post(url, newUser);
			await UserService.getUser(data.username, data.password);
			localStorage.setItem("loggedUsername", data.username);
			localStorage.setItem("loggedPassword", data.password);
			localStorage.setItem("userId", data.id);
			return data;
		} catch (error) {
			alert(error);
		}
	},
	getAllUsernames: async () => {
		const url = `/User/GetAllUsernames`;

		try {
			const { data } = await api.get(url, { headers });

			return data;
		} catch (error) {
			alert(error);
		}
	},
	editUser: async (user: IUserObject, id: number) => {
		const url = `/User/Put/${id}`;

		try {
			const data = await api.put(url, user);
			alert("Changes are changed successifully!");
			if (user?.username !== undefined) {
				localStorage.removeItem("loggedUsername");
				localStorage.setItem("loggedUsername", data.data.username);
			}
			if (user?.password !== undefined) {
				localStorage.removeItem("loggedPassword");
				localStorage.setItem("loggedPassword", data.data.password);
			}
			console.log(user?.username);
		} catch (error) {
			alert(error);
		}
	},
};

export default UserService;
