import axios from "axios";
import React from "react";
import Button from "../../components/common/button/Button";
interface APIReq {
	text: string;
}
const port = "44369";
const UserService = {
	getUser: async (text: string) => {
		// const url = `http://localhost:${port}/login`;
		// const user = { username: `${text}` };
		// const tokenData = await axios.post(url, user);
		// const token = tokenData.data.accessToken;
		//	const userUrl = `http://localhost:3000/posts`;
		//	console.log(token);
		// const config = {
		// 	headers: { Authorization: `Bearer ${token}` },
		// };
		// const { data } = await axios.get(userUrl, config);
		// console.log(data[0]);
		// return data.length > 0 ? data : false;

		//# under this comment is temporary code which is used for testing frontend
		const users = await axios.get(`https://localhost:${port}/api/User`);
		let id;
		for (let i = 0; i < users.data.length; i++) {
			let loggedUser;
			if (users.data[i].username === text) {
				loggedUser = users.data[i];
				//console.log(loggedUser);
				id = loggedUser.id;
			}
		}
		const data = axios.get(`https://localhost:${port}/api/User/${id}`);
		return data;
	},
	getAllUsers: async () => {
		const url = `https://localhost:${port}/api/User`;

		const { data } = await axios.get(url);
		console.log(data);

		return data;
	},
};

export default UserService;
