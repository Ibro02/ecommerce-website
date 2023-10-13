import React, { useEffect, useState } from "react";
import SignInput from "../../groups/SignInput/SignInput";
import Button from "../../common/button/Button";
import { useAppSelector } from "../../../redux/store";
import { Profiles } from "../../../constants/Mock";
import UserService from "../../../api/services/Users";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	const user = useAppSelector((state) => state.loginReducer.user);
	const [auth, setAuth] = useState<boolean>(false);
	const navigate = useNavigate();
	const signIn = async () => {
		const loggedUser = await UserService.getUser(user.username);
		console.log(loggedUser);
		if (!loggedUser) navigate("/");
		else {
			navigate("/home");
		}
		// 		console.log(user)
		// 		Profiles.map((us, k) => {
		// 			if (user.username === us.name) {setAuth(true)};
		// 			console.log(us.name)
		//    console.log(user.username)
		// 		});
		return auth;
	};
	return (
		<div
			className={`${
				!mode ? "" : "opacity-0 hidden"
			} p-10 rounded-lg flex-column bg-blur ease-in duration-100`}
		>
			<h1 className="text-slate-200">Sign In</h1>
			<div className="flex">
				<div>
					<SignInput title="username" disabled={false} placeholder="Username" />
					<SignInput title="password" disabled={false} placeholder="Password" />
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
	);
}

export default LogInForm;
