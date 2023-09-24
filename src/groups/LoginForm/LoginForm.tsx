import React from "react";
import SignInput from "../../groups/SignInput/SignInput";
import Button from "../../components/common/button/Button";
import { useAppSelector } from "../../redux/store";
function LogInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);

	return (
		<div
			className={`${
				mode ? "" : "hidden"
			}  duration-100 p-10 rounded-lg flex-column bg-blur`}
		>
			<h1 className="text-slate-200">Sign In</h1>
			<div className="flex">
				<div>
					<SignInput title="Username" disabled={false} placeholder="Username" />
					<SignInput title="Password" disabled={false} placeholder="Password" />
				</div>
			</div>
			<div className="flex-row">
				<Button text="Sign In!" btn={true} padding="4" />
				<Button
					text="You do not have account?"
					color={"text-red-400"}
					btn={false}
				/>
			</div>
		</div>
	);
}

export default LogInForm;
