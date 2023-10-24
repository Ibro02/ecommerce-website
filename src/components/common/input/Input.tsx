import  { useEffect, useState } from "react";

function Input({
	type,
	placeholder,
	disabled,
	getValue,
	error,
}: {
	type?: string;
	placeholder: string;
	disabled: boolean;
	getValue?: Function;
	error?: boolean;
}) {
	const [value, getVal] = useState("");
	useEffect(() => {
		if (getValue !== undefined) getValue(value);
	}, [value]);
	return (
		<div
			className={`border-solid border-b-2 ease-in duration-200 focus-within:border-b-4 ${
				error === true ? "border-red-500" : "border-gray-400"
			} rounded-sm`}
		>
			<input
				className={`p-2 ${
					error ? "bg-red-400" : "bg-slate-100"
				} text-slate-200 outline-none bg-opacity-0 focus-within:bg-opacity-10`}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				onChange={(e) => getVal(e.currentTarget.value)}
			/>
		</div>
	);
}

export default Input;
