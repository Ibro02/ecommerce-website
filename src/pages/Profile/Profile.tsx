import { useState } from "react";
import Box from "../../components/groups/Box/Box";
import ProfileText from "../../components/common/ProfileText/ProfileText";
import { ProfileProps } from "../../constants/Mock";
import Container from "../../utils/containers/Container/Container";
import Input from "../../components/common/input/Input";
import { useAppSelector } from "../../redux/store";
import ActionText from "../../components/common/button/textButton/ActionText";
import Title from "../../components/common/Title/Title";

function Profile() {
	const user = useAppSelector((state) => state.userReducer.user);
	const [isEnabled, enableInput] = useState(true);
	const displayInput = (name: string) => {
		for (const prop in user)
			if (prop === name)
				if (user[`${name}`].length !== 0) return user[`${name}`];

		return `No ${name}`;
	};
	return (
		<div>
			<Box>
				<Container>
                <Title>Profile</Title>
					<Container className="grid grid-cols-2 md:grid-cols-4 mt-10">
						{ProfileProps.map((prop, key) => (
							<>
								<ProfileText>{prop.title}</ProfileText>

								<Input
									disabled={isEnabled}
									placeholder={`${isEnabled ? displayInput(prop.name) : ""}`}
									color="text-slate-800"
								>
									{!isEnabled ? displayInput(prop.name) : null}
								</Input>
							</>
						))}
					</Container>
					<Container className="mt-full flex flex-col-reverse mx-10 ">
						<Container className="flex gap-5">
							<ActionText
								color="relative text-red-900 hover:text-red-700 underline cursor-pointer"
								onClick={() => enableInput(!isEnabled)}
							>
								{isEnabled ? "Edit" : "Cancel"}
							</ActionText>
							{!isEnabled && (
								<ActionText
									color="relative text-green-600 hover:text-red-700 underline cursor-pointer"
									onClick={() => enableInput(!isEnabled)}
								>
									Save
								</ActionText>
							)}
						</Container>
					</Container>
				</Container>
			</Box>
		</div>
	);
}

export default Profile;
