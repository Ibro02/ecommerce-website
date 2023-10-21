import React, { useContext, useState } from "react";
import SignInForm from "../../../components/groups/signInForm/SignInForm";
import LoginForm from "../../../components/groups/LoginForm/LoginForm";
import Container from "../../containers/Container/Container";
import Hero from "../../../components/groups/signInHero/Hero";
function RegAndLogin() {
	const [logIn, setLogIn] = useState(false);

	return (

		<Container className="flex w-full">
			<Container className="mr-56">
			<SignInForm />
			<LoginForm />
			</Container>
			<Container className="relative ">
			<Hero/>
			</Container>
		</Container>

	);
}

export default RegAndLogin;
