import React from "react";

interface IActionText {
	color?: string;
	onClick: Function;
	children: string;
}

function ActionText({ color, onClick, children }: IActionText) {
	return (
		<a
			className={`${color} cursor-pointer`}
			onClick={() => {
				onClick();
			}}
		>
			{children}
		</a>
	);
}

export default ActionText;
