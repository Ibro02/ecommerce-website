import React, { useContext, useState } from "react";
import SignInForm from "../../../components/groups/signInForm/SignInForm";
import LoginForm from "../../../components/groups/LoginForm/LoginForm";
function RegAndLogin() {
	const [logIn, setLogIn] = useState(false);

	return (
		<div className="ease-in duration-500">
			<SignInForm />
			<LoginForm />
		</div>
	);
}

export default RegAndLogin;
