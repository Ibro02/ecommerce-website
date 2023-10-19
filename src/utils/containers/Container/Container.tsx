import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
  }
function Container({
	children, className
}: ContainerProps
) {
	return <div className={className}>{children}</div>;
}

export default Container;
