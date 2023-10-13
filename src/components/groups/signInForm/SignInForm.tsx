import React, { useEffect } from "react";
import SignInput from "../../groups/SignInput/SignInput";
import Button from "../../common/button/Button";
import { useAppSelector } from "../../../redux/store";
import Container from "../../../utils/containers/Container/Container";
function SignInForm() {
	const mode = useAppSelector((state) => state.modeReducer.logIn);
	useEffect(() => {
		console.log(mode);
	}, [mode]);
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
			{/**@TODO - make animation via js/ts with display: hidden*/}
			<div
				className={`${
					mode
						? ""
						: "opacity-0 p-0 translate-x-1/4 translate-y-1/4 rounded-none z-0"
				} z-20 p-10 rounded-lg flex-column bg-blur ease-in duration-500`}
			>
				<h1 className="text-slate-200">Create Account</h1>

				<div className="flex">
					<Container>
						<SignInput title="Name" disabled={false} placeholder="Name" />
						<SignInput title="Surname" disabled={false} placeholder="Surname" />
						<SignInput
							title="Username"
							disabled={false}
							placeholder="Username"
						/>
					</Container>
					<Container>
						<SignInput
							title="Phone"
							disabled={false}
							placeholder="Phone number"
						/>
						<SignInput title="Country" disabled={false} placeholder="Country" />
						<SignInput title="City" disabled={false} placeholder="City" />
					</Container>
					<Container>
						<SignInput title="City" disabled={false} placeholder="Email" />
						<SignInput
							title="Password"
							disabled={false}
							placeholder="Password"
						/>
						<SignInput
							title="Confirm password"
							disabled={false}
							placeholder="Comfirm Password"
						/>
					</Container>
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
		</div>
	);
}

export default SignInForm;
