import Container from "../../../utils/containers/Container/Container";

interface ITitle {
	children: string;
	color?: string;
	fontSize?: string;
}
function Title({ children, color, fontSize }: ITitle) {
	return (
		<Container
			className={`${color !== undefined ? "text-slate-8000" : color} ${
				fontSize !== undefined ? "" : fontSize
			}`}
		>
			<h1>{children}</h1>
		</Container>
	);
}

export default Title;
