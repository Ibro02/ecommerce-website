import axios from "axios";
import React from "react";
import Button from "../../components/common/button/Button";
interface APIReq {
	text: string;
}

const UserService = {
	getUser: async (text: string) => {
		const url = "http://localhost:3000/login";
		const user = { username: `${text}` };
		const tokenData = await axios.post(url, user);
		const token = tokenData.data.accessToken;
		const userUrl = `http://localhost:3000/posts`;
		console.log(token);
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const { data } = await axios.get(userUrl, config);
		console.log(data[0]);
		return data.length > 0 ? data : false;
	},
	getAllUsers: async () => {
		const url = "http://localhost:3000/users";

		const { data } = await axios.get(url);
		console.log(data);

		return data;
	},
};

export default UserService;
