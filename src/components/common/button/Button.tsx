import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changeMode } from "../../../redux/slices/loginmodeslice";
import ActionText from "./textButton/ActionText";
import Container from "../../../utils/containers/Container/Container";

interface Button {
	text: string;
	padding?: string;
	bgColor?: string;
	btn: boolean;
	color?: string;
	onClick?: Function | undefined;
	isClicked?: boolean;
}
function Button({
	btn,
	text,
	padding,
	bgColor,
	color,
	onClick,
	isClicked,
}: Button) {
	const dispatch = useAppDispatch();
	const mode = useAppSelector((state) => state.modeReducer.logIn);


	return (
		<Container>
			{btn && (
				<button
					className={`${color ?? "text-white my-3 hover:bg-red-700"} p-${
						padding ?? "2"
					} ${bgColor ?? "bg-red-500"} border-none `}
					onClick={() => onClick()}
				>
					{/*temporary href (it should be dynamic)*/}
					{text}
				</button>

				// </a>
			)}
			{!btn && (
				<ActionText
					color={`${color} hover:text-red-600`}
					onClick={() => {
						dispatch(changeMode(!mode));
					}}
				>
					{text}
				</ActionText>
			)}
		</Container>
	);
}

export default Button;
