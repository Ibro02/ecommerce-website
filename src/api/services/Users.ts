import axios from "axios";
import LoginService from "./Login";


const port = "44369";
const UserService = {
	getUser: async (loggedUsername: string, loggedPassword: string) => {
		const token = await LoginService.login(loggedUsername, loggedPassword);
		const config = {
			headers: { Authorization: `Bearer ${token.data}` },
		};
		//@todo - make this auth like in zendev's project
		const users = await axios.get(`https://localhost:${port}/api/User`, config);
		let id;
	//	console.log(users.data);
		for (let i = 0; i < users.data.length; i++) {
			let loggedUser;
			if (users.data[i].username === loggedUsername) {
				loggedUser = users.data[i];
				//console.log(loggedUser);
				id = loggedUser.id;
			}
		}
	//	console.log(id);

		const data = axios.get(
			`https://localhost:${port}/api/User/Get/${id}`,
			config
		);
		return data;
	},
	getAllUsers: async () => {
		const url = `https://localhost:${port}/api/User`;

		const { data } = await axios.get(url);
	//	console.log(data);

		return data;
	},
	postUser:async (newUser:object) => {
		const url = `https://localhost:${port}/api/User/Post`
  try{
	  const {data} = await axios.post(url, newUser);
	 // console.log(data)
	  return data;
	}
	catch(error)
	{
		alert(error)
	}
	},
	getAllUsernames:async () => {
		
		const url = `https://localhost:${port}/api/User/GetAllUsernames`;

		try{

			const { data } = await axios.get(url)
				
				return data;
			
	
		}
		catch(error)
		{
			alert(error);
		}
	}
};

export default UserService;
