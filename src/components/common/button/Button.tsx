import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeMode } from "../../../redux/loginmodeslice";

interface Button {
	text: string;
	padding: string;
	bgColor: string;
	btn: boolean;
	color: string;
	onClick: Function;
	isClicked: boolean;
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
	const logIn = useRef(true);
	const dispatch = useAppDispatch();
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	return (
		<div>
			{btn && (
				<a href="#" className={` hover:text-red-200`}>
					<button
						className={`${color ?? "text-white hover:bg-red-700"} p-${
							padding ?? "2"
						} bg-${bgColor ?? "red-500"} border-none `}
					>
						{text}
					</button>
				</a>
			)}
			{!btn && (
				<a
					href="#"
					className={`${color} hover:text-red-600`}
					onClick={() => dispatch(changeMode(!mode))}
				>
					{text}
				</a>
			)}
		</div>
	);
}

export default Button;
