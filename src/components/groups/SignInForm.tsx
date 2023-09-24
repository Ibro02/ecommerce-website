import React, { useEffect } from "react";
import SignInput from "../../groups/SignInput/SignInput";
import Button from "../common/button/Button";
import { useAppSelector } from "../../redux/store";
function SignInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	useEffect(() => {
		console.log(mode);
	}, [mode]);
	return (
		<div
			className={`${!mode ? "" : "hidden"} p-10 rounded-lg flex-column bg-blur`}
		>
			<h1 className="text-slate-200">Create Account</h1>

			<div className="flex">
				<div>
					<SignInput title="Name" disabled={false} placeholder="Name" />
					<SignInput title="Surname" disabled={false} placeholder="Surname" />
					<SignInput title="Username" disabled={false} placeholder="Username" />
				</div>
				<div>
					<SignInput
						title="Phone"
						disabled={false}
						placeholder="Phone number"
					/>
					<SignInput title="Country" disabled={false} placeholder="Country" />
					<SignInput title="City" disabled={false} placeholder="City" />
				</div>
				<div>
					<SignInput title="City" disabled={false} placeholder="Email" />
					<SignInput title="Password" disabled={false} placeholder="Password" />
					<SignInput
						title="Confirm password"
						disabled={false}
						placeholder="Comfirm Password"
					/>
				</div>
			</div>
			<div className="flex-row">
				<Button text="Sign In!" btn={true} padding="4" />
				<Button
					text="You have an account?"
					color={"text-red-400"}
					btn={false}
				/>
			</div>
		</div>
	);
}

export default SignInForm;
