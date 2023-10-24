import React, { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeMode } from "../../../redux/slices/loginmodeslice";
import { Profiles } from "../../../constants/Mock";
import UserService from "../../../api/services/Users";
import ActionText from "./textButton/ActionText";
import Container from "../../../utils/containers/Container/Container";
import { Link } from "react-router-dom";
import LoginService from "../../../api/services/Login";
interface Button {
	text: string;
	padding?: string;
	bgColor?: string;
	btn: boolean;
	color?: string;
	onClick?: Function | undefined;
	isClicked?: boolean;
}
function Button({
	btn,
	text,
	padding,
	bgColor,
	color,
	onClick,
	isClicked,
}: Button) {
	const dispatch = useAppDispatch();
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	const user = useAppSelector((state) => state.loginReducer.user);


	return (
		<Container>
			{btn && (
				<button
					className={`${color ?? "text-white my-3 hover:bg-red-700"} p-${
						padding ?? "2"
					} ${bgColor ?? "bg-red-500"} border-none `}
					onClick={() => onClick()}
				>
					{/*temporary href (it should be dynamic)*/}
					{text}
				</button>

				// </a>
			)}
			{!btn && (
				<ActionText
					color={`${color} hover:text-red-600`}
					onClick={() => {
						dispatch(changeMode(!mode));
						LoginService.login(user.username, user.password);
					}}
				>
					{text}
				</ActionText>
			)}
		</Container>
	);
}

export default Button;
