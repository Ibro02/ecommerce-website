interface IFlex {
	children?: JSX.Element | React.HTMLAttributes<HTMLDivElement>;
}
function Flex({ children }: IFlex) {
	return <div className="flex">{children}</div>;
}

export default Flex;
