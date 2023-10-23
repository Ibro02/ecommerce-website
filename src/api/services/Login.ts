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
	
		//console.log(profile);
		const token =await axios.post(`https://localhost:${port}/api/Login`, profile);
        if (token.data.length > 0)
		{
		
		 window.localStorage.setItem("token", token.data);
	    //console.log(localStorage);
		}
		return token;
	},
};

export default LoginService;
