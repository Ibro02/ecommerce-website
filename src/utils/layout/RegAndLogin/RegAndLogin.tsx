import { useState } from "react";
import SignInForm from "../../../components/groups/signInForm/SignInForm";
import LoginForm from "../../../components/groups/LoginForm/LoginForm";
import Container from "../../containers/Container/Container";
import Hero from "../../../components/groups/signInHero/Hero";
function RegAndLogin() {
	const [logIn, setLogIn] = useState(false);

	return (
		<Container className="flex">
			<Container className="md:mr-72 w-full mx-auto">
				<SignInForm />
				<LoginForm />
			</Container>
			<Container className="flex ml-auto">
				<Hero />
			</Container>
		</Container>
	);
}

export default RegAndLogin;
