import { useState } from "react";
import "./App.css";
import RegAndLogin from "./utils/layout/RegAndLogin/RegAndLogin";
import LoginBackground from "./assets/LoginBackground";
import { useAppDispatch } from "./redux/store";
import { changeMode } from "./redux/slices/loginmodeslice";
function App() {
	const [count, setCount] = useState(0);
	const dispatch = useAppDispatch();
	return (
		<>
			<div className="bg-svg" />
			<div>
				<RegAndLogin />
			</div>
		</>
	);
}

export default App;
