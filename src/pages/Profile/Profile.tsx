import { useState, useRef, useEffect } from "react";
import Box from "../../components/groups/Box/Box";
import ProfileText from "../../components/common/ProfileText/ProfileText";
import { ProfileProps } from "../../constants/Mock";
import Container from "../../utils/containers/Container/Container";
import Input from "../../components/common/input/Input";
import { useAppSelector } from "../../redux/store";
import ActionText from "../../components/common/button/textButton/ActionText";
import Title from "../../components/common/Title/Title";
import profileImg from "../../assets/profileImg.svg";
import UserService from "../../api/services/Users";
import Form from "../../components/groups/Form/Form";
function Profile() {
	const user = useAppSelector((state) => state.userReducer.user);
	const [isEnabled, enableInput] = useState(true);
	const [myObject, setMyObject] = useState<any>({});

	return (
		<Box>
			<Container>
				<img className="m-auto w-1/5" alt="Profile image" src={profileImg} />
				<Title>Profile</Title>
				<Form
					objectProps={ProfileProps}
					object={user}
					isEnabled={isEnabled}
					onChange={(e: string) => setMyObject(e)}
				/>
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
								onClick={() => {
									enableInput(!isEnabled);
									console.log(myObject);
									UserService.editUser(myObject, localStorage.userId);
								}}
							>
								Save
							</ActionText>
						)}
					</Container>
				</Container>
			</Container>
		</Box>
	);
}

export default Profile;
