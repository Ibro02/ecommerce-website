import React from "react";

function Container({
	children,
}: React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	return <div>{children}</div>;
}

export default Container;
