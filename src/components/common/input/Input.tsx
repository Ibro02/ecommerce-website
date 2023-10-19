import React, {useEffect, useState} from "react";

function Input({
	type,
	placeholder,
	disabled,
	getValue
}: {
	type?: string;
	placeholder: string;
	disabled: boolean;
	getValue: Function
}) {
	const [value, getVal] = useState('')
	useEffect(()=>
	{
getValue(value)

	},[value])
	return (
		<div className="border-solid border-b-2 ease-in duration-200 focus-within:border-b-4 border-gray-400 rounded-sm">
			<input
				className="p-2 bg-slate-100 text-slate-200 outline-none bg-opacity-0 focus-within:bg-opacity-10"
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				onChange={(e)=>getVal(e.currentTarget.value)}
			/>
		</div>
	);
}

export default Input;
