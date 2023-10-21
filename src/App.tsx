import { useEffect, useState } from "react";
import "./App.css";
import RegAndLogin from "./utils/layout/RegAndLogin/RegAndLogin";
import LoginBackground from "./assets/LoginBackground";
import { useAppDispatch } from "./redux/store";
import { changeMode } from "./redux/slices/loginmodeslice";
import Container from "./utils/containers/Container/Container";

function App() {
	const [count, setCount] = useState(0);
//@todo - load user here...
	return (
		<Container>
			<div className="bg-svg" />
				<RegAndLogin />
		</Container>
	);
}

export default App;
