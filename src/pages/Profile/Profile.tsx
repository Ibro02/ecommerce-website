import { useState,useRef, useEffect } from "react";
import Box from "../../components/groups/Box/Box";
import ProfileText from "../../components/common/ProfileText/ProfileText";
import { ProfileProps } from "../../constants/Mock";
import Container from "../../utils/containers/Container/Container";
import Input from "../../components/common/input/Input";
import { useAppSelector } from "../../redux/store";
import ActionText from "../../components/common/button/textButton/ActionText";
import Title from "../../components/common/Title/Title";
import profileImg from "../../assets/profileImg.svg"
import UserService from "../../api/services/Users";
import Form from "../../components/groups/Form/Form";
function Profile() {
	const user = useAppSelector((state) => state.userReducer.user);
	const [isEnabled, enableInput] = useState(true);
	const displayInput = (name: string) => {
		for (const prop in user)
			if (prop === name)
			if (user[`${name}`] !== null)
				if (user[`${name}`].length !== 0) return user[`${name}`];

		return `No ${name}`;
	};

	const [myObject, setMyObject] = useState<any>({});

	const updateObjectProperty = (propertyName: string, propertyValue: string | number) => {
	  const updatedObject = { ...myObject };
  
	  updatedObject[propertyName] = propertyValue;
      if (updatedObject?.cityId === "")
	  updatedObject.cityId = null;
	  setMyObject(updatedObject);
	};


	return (

			<Box>
				<Container>
				<img className="m-auto w-1/5" alt="Profile image" src={profileImg}/>
                <Title>Profile</Title>
				<Form objectProps={ProfileProps} object={user}/>
				{/* <form>
					{/* <Container className="grid grid-cols-2 md:grid-cols-4 mt-10"> 
<Container className="flex flex-col w-full m-auto items-baseline justify-evenly flex-wrap">
						{ProfileProps.map((prop, key) => (
							<Container className=" flex w-2/3 justify-between m-auto">
								<ProfileText>{prop.title}</ProfileText>

								<Input
								    key={key}
									name={prop.name}
									disabled={isEnabled}
									placeholder={`${isEnabled ? displayInput(prop.name) : ""}`}
									color="text-slate-800"
								    getValue={(e:string)=>updateObjectProperty(prop.name,e)}
									>
									{!isEnabled ? displayInput(prop.name) : null}
								</Input>
							</Container>
						))}
					</Container>
						</form> */}
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
									onClick={() =>{ enableInput(!isEnabled); console.log(myObject); UserService.editUser(myObject, localStorage.userId)}}
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
