import { useEffect, useRef } from "react";
import Button from "../../common/button/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import Container from "../../../utils/containers/Container/Container";
import { useState } from "react";
import Input from "../../common/input/Input";
import UserService from "../../../api/services/Users";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../../redux/slices/userSlice";

function SignInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	const navigator = useNavigate();
	const newUser = useRef({
		id: 0,
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		email: "",
		phone: "",
		description: "",
		cityId: null,
	});

	const dispatch = useAppDispatch();
	//New user atributes
	const [firstName, getFirstName] = useState("");
	const [lastName, getLastName] = useState("");
	const [username, getUsername] = useState("");
	const [password, getPassword] = useState("");
	const [comfirmedPassword, getComfirmedPassword] = useState("");
	const [email, getEmail] = useState("");
	//Error color states
	const [firstNameError, setFirstNameError] = useState(false);
	const [lastNameError, setLastNameError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [emailError, setEmailError] = useState(false);

	const setErrorStateDefaults = (err: boolean) => {
		setFirstNameError(err);
		setLastNameError(err);
		setPasswordError(err);
		setEmailError(err);
		setUsernameError(err);
	};

	useEffect(() => {
		setErrorStateDefaults(false);

		newUser.current.firstName = firstName;
		newUser.current.lastName = lastName;
		newUser.current.email = email;
		newUser.current.username = username;
		newUser.current.password = password;
	}, [firstName, lastName, email, username, password]);

	const register = async () => {
       window.localStorage.removeItem("token")
	   //window.localStorage.clear();

		localStorage.setItem("loggedUsername", newUser.current.username);
		localStorage.setItem("loggedPassword", newUser.current.password);

		const email = newUser.current.email.split("@");
		const allUsernames: Array<string> = await UserService.getAllUsernames();
		var isUnique = true;
		allUsernames.forEach((username) => {
			if (username === newUser.current.username) isUnique = false;
		
		});

		if (newUser.current.firstName.length > 3)
			if (newUser.current.lastName.length > 4)
				if (isUnique)
					if (newUser.current.username.length > 5)
						if (newUser.current.password.length > 6)
							if (newUser.current.password === comfirmedPassword)
								if (email.length == 2) {
									navigator("/home");
									UserService.postUser(newUser.current);
									await UserService.getUser(
										localStorage.loggedUsername,
										localStorage.loggedPassword
									);
									dispatch(getUserInfo(newUser.current));
								} else {
									alert("Email is incorrect! Try again!");
									setEmailError(true);
								}
							else {
								alert("Passwords are not matched!");
								setPasswordError(true);
							}
						else {
							alert("Password must be longer than 6 charachers!");
							setPasswordError(true);
						}
					else {
						alert("Username must be longer than 5 characters!");
						setUsernameError(true);
					}
				else {
					alert("Username already exists! Try another one!");
					setUsernameError(true);
				}
			else {
				alert("Last name must be longer than 4 characters!");
				setLastNameError(true);
			}
		else {
			alert("First name must be longer than 3 characters!");
			setFirstNameError(true);
		}
	};

	return (
		<div className="md:absolute top-1/2 left-1/2 md:-translate-x-3/4 md:-translate-y-1/2 z-0">
			{/**@TODO - make animation via js/ts with display: hidden*/}
			<div
				className={`${
					mode
						? ""
						: "md:block md:opacity-0 hidden p-0 md:translate-x-1/4 md:translate-y-1/4 rounded-none z-0"
				} z-20 p-10 flex-column bg-blur ease-in duration-500`}
			>
				<h1 className="text-slate-200">Create Account</h1>

				<Container className="flex gap-2">
					<Container className="grid grid-cols-1 gap-4">
						<Input
							type="text"
							disabled={false}
							placeholder="Name"
							getValue={getFirstName}
							error={firstNameError}
						/>
						<Input
							type="text"
							disabled={false}
							placeholder="Surname"
							getValue={getLastName}
							error={lastNameError}
						/>
						<Input
							type="text"
							disabled={false}
							placeholder="Username"
							getValue={getUsername}
							error={usernameError}
						/>
					</Container>

					<Container className="grid grid-cols-1 gap-4">
						<Input
							type="text"
							disabled={false}
							placeholder="Email"
							getValue={getEmail}
							error={emailError}
						/>
						<Input
							type="password"
							getValue={getPassword}
							disabled={false}
							placeholder="Password"
							error={passwordError}
						/>
						<Input
							type="password"
							getValue={getComfirmedPassword}
							disabled={false}
							placeholder="Comfirm Password"
							error={passwordError}
						/>
					</Container>
				</Container>
				<div className="flex-row">
					<Button text="Sign In!" btn={true} padding="4" onClick={register} />
					<Button
						text="You have an account?"
						color={"text-red-400"}
						btn={false}
					/>
				</div>
			</div>
		</div>
	);
}

export default SignInForm;
