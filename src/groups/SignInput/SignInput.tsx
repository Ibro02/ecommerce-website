import React from "react";
import Input from "../../components/common/input/Input";

interface SignInfo {
	title: string;
	placeholder: string;
	disabled: boolean;
}
function SignInput({ title, placeholder, disabled }: SignInfo): JSX.Element {
	return (
		<div className="flex-row p-3 ">
			<Input type="text" placeholder={placeholder} disabled={disabled} />
		</div>
	);
}

export default SignInput;
