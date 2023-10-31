import { useState } from "react";
import "./App.css";
import RegAndLogin from "./utils/layout/RegAndLogin/RegAndLogin";
import Container from "./utils/containers/Container/Container";

function App() {
	return (
		<Container>
			<div className="bg-svg" />
			<RegAndLogin />
		</Container>
	);
}

export default App;
