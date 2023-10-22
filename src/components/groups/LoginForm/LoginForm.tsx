import React, { useEffect, useState } from "react";
import SignInput from "../../groups/SignInput/SignInput";
import Button from "../../common/button/Button";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { Profiles } from "../../../constants/Mock";
import UserService from "../../../api/services/Users";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../../../redux/slices/loginSlice";
import userSlice, { getUserInfo } from "../../../redux/slices/userSlice";
import Container from "../../../utils/containers/Container/Container";

function LogInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	const logInfo = useAppSelector((state) => state.loginReducer.user);
	const user = useAppSelector((state) => state.userReducer);
	const [auth, setAuth] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	useEffect(() => {
		signIn();
	}, [user]);
	const signIn = async () => {
		//console.log(logInfo.password);
		localStorage.setItem("loggedUsername", logInfo.username);
		localStorage.setItem("loggedPassword", logInfo.password);
		const loggedUser = await UserService.getUser(
			localStorage.loggedUsername,
			localStorage.loggedPassword
			);

		if (!loggedUser) {
			navigate("/")
			alert("Incorrect password or username! Try again!")

		}
		else {
			//console.log(user);
			navigate("/home");
			dispatch(getUserInfo(loggedUser.data));
		}
		// 		//console.log(user)
		// 		Profiles.map((us, k) => {
		// 			if (user.username === us.name) {setAuth(true)};
		// 			//console.log(us.name)
		//    //console.log(user.username)
		// 		});
		return auth;
	};
	return (
		<Container className="flex">
		<div
			className={`${
				!mode ? "" : "opacity-0 hidden"
			} p-10 rounded-lg flex-column bg-blur ease-in duration-100`}
			>
			<h1 className="text-slate-200">Sign In</h1>
			<div className="flex">
				<div>
					<SignInput
						type="text"
						title="username"
						disabled={false}
						placeholder="Username"
						/>
					<SignInput
						type="password"
						title="password"
						disabled={false}
						placeholder="Password"
						/>
				</div>
			</div>
			<div className="flex-row">
				<Button
					text="Sign In!"
					btn={true}
					padding="4"
					onClick={() => {
						signIn();
					}}
					/>

				<Button
					text="You do not have account?"
					color={"text-red-400"}
					btn={false}
					/>
			</div>
		</div>
					</Container>
	);
}

export default LogInForm;
