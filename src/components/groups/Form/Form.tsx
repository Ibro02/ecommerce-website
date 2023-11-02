import { useState, useEffect } from "react";
import Container from "../../../utils/containers/Container/Container";
import { IInputProps, ProfileProps } from "../../../constants/Mock";
import ProfileText from "../../common/ProfileText/ProfileText";
import Input from "../../common/input/Input";

function Form({
	objectProps,
	object,
	isEnabled,
	onChange,
	type,
}: {
	objectProps: Array<IInputProps>;
	object: any;
	isEnabled?: boolean;
	onChange: Function;
	type?: string;
}) {
	const [myObject, setMyObject] = useState<any>({});
	useEffect(() => {
		onChange(myObject);
		console.log(myObject);
	}, [myObject]);

	const displayInput = (name: string) => {
		for (const prop in object)
			if (prop === name)
				if (object[`${name}`] !== null)
					if (object[`${name}`].length !== 0) return object[`${name}`];
		return `No ${name}`;
	};
	const updateObjectProperty = (
		propertyName: string,
		propertyValue: string | number
	) => {
		const updatedObject = { ...myObject };

		updatedObject[propertyName] = propertyValue;
		if (updatedObject?.cityId === "") updatedObject.cityId = null;
		setMyObject(updatedObject);
	};

	return (
		<form>
			<Container className="flex flex-col w-full m-auto items-baseline justify-evenly flex-wrap">
				{objectProps.map((prop, key) => (
					<Container className=" flex w-full justify-center mx-auto">
						<Container className=" w-1/3 m-auto">
							<ProfileText>{prop.title}</ProfileText>
						</Container>
						<Input
							key={key}
							name={prop.name}
							disabled={isEnabled ?? true}
							placeholder={`${isEnabled||type==="create" ? displayInput(prop.name) : ""}`}
							color="text-slate-800"
							getValue={(e: string) => {
								 updateObjectProperty(prop.name, e);
							}}
						>
							{type !== "create"&&
							!isEnabled ? displayInput(prop.name) : ``
						}
						</Input>
					</Container>
				))}
			</Container>
		</form>
	);
}

export default Form;
