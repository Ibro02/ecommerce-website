import React, { useState, useEffect } from "react";
import Input from "../../common/input/Input";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
	getLogInfo,
	getPassword,
	getUsername,
} from "../../../redux/slices/loginSlice";

interface SignInfo {
	title: string;
	placeholder: string;
	disabled: boolean;
	type: string;
	getValue?: any;
	atribute?: string|number;
}
function SignInput({ title, placeholder, disabled,type,atribute}: SignInfo): JSX.Element {
	const [value, getValue] = useState("");
	const obj = useAppSelector((state) => state.loginReducer.user);
	const dispatch = useAppDispatch();
	useEffect(() => {
		////console.log(value);
		if (title === "username") dispatch(getUsername(value));
		else if (title === "password")dispatch(getPassword(value));
	    else if (title === "Name") atribute = value;
	}, [value]);
	return (
		<div className="flex-row p-3 ">
			<Input
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				getValue={getValue}
			/>
		</div>
	);
}

export default SignInput;
