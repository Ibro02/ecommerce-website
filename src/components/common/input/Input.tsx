import React from "react";

function Input({
	type,
	placeholder,
	disabled,
}: {
	type: string;
	placeholder: string;
	disabled: boolean;
}) {
	return (
		<div className="border-solid border-b-2 ease-in duration-200 focus-within:border-b-4 border-gray-400 rounded-sm">
			<input
				className="p-2 bg-slate-200 text-slate-200 outline-none bg-opacity-10"
				type="text"
				placeholder={placeholder}
				disabled={disabled}
			/>
		</div>
	);
}

export default Input;
