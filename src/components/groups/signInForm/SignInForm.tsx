import React, { useEffect, useRef } from "react";
import SignInput from "../../groups/SignInput/SignInput";
import Button from "../../common/button/Button";
import { useAppSelector } from "../../../redux/store";
import Container from "../../../utils/containers/Container/Container";
import {useState} from "react"
import Input from "../../common/input/Input";
import UserService from "../../../api/services/Users";


function SignInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	
	const newUser = useRef({
		id:0,
		firstName: "",
		lastName: "",
		username: "",
		password: "", 
		email: "",
		roleId: 1,
        phone: "",
		description: "",
		cityId: null
})

const [firstName, getFirstName] = useState("");
const [lastName, getLastName] = useState("");
const [username, getUsername] = useState("");
const [password, getPassword] = useState("");
const [comfirmedPassword, getComfirmedPassword] = useState("");
const [email, getEmail] = useState("");

   useEffect(()=>
   {
	newUser.current.firstName = firstName;
	newUser.current.lastName = lastName;
	newUser.current.email = email;
	newUser.current.username = username;
	newUser.current.password = password;
console.log(newUser)
   },[firstName,lastName,email,username, password])

const register = () =>
{
const email = newUser.current.email.split("@");
if (newUser.current.username.length > 5)
  if (newUser.current.password.length > 6)
   if (email.length == 2)
   {
    UserService.postUser(newUser.current);

   }
   else alert("Email is incorrect! Try again!")
  else alert("Password must be longer than 6 charachers!")
else alert("Username must have more than 5 characters!");
}

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
			{/**@TODO - make animation via js/ts with display: hidden*/}
			<div
				className={`${
					mode
						? ""
						: "opacity-0 p-0 translate-x-1/4 translate-y-1/4 rounded-none z-0"
				} z-20 p-10 flex-column bg-blur ease-in duration-500`}
			>
				<h1 className="text-slate-200">Create Account</h1>

<Container className="flex gap-2">
					<Container className="grid grid-cols-1 gap-4">
			  		    <Input type="text" disabled={false} placeholder="Name" getValue={getFirstName}/>
						<Input  type="text" disabled={false} placeholder="Surname" getValue={getLastName}/>
						<Input
						type="text"
						disabled={false}
						placeholder="Username"
						getValue={getUsername}
						/>
					</Container>

					<Container className="grid grid-cols-1 gap-4">
						<Input type="text" disabled={false} placeholder="Email" getValue={getEmail}/>
						<Input
						    type="password"
							getValue={getPassword}
							disabled={false}
							placeholder="Password"
						/>					
						<Input
						    type="password"
							getValue={getComfirmedPassword}
							disabled={false}
							placeholder="Comfirm Password"
						/>
					</Container>
		</Container>
				<div className="flex-row">
					<Button text="Sign In!" btn={true} padding="4" onClick={register}/>
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
