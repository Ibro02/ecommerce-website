import { useState, useEffect } from "react";
import Container from "../../../utils/containers/Container/Container";
import {
	IInputProps,
	ProductProps,
	ProfileProps,
} from "../../../constants/Mock";
import ProfileText from "../../common/ProfileText/ProfileText";
import Input from "../../common/input/Input";
import Dropdown from "../../common/Dropdown/Dropdown";
import ProductService from "../../../api/services/Products";
import { IDropdownList } from "../../common/Dropdown/Dropdown";
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
	name?: string;
}) {
	const [myObject, setMyObject] = useState<any>({});
	const [categoryDropdownList, setCategoryDropdownList] = useState<
		IDropdownList[]
	>([]);
	const [statusDropdownList, setStatusDropdownList] = useState<IDropdownList[]>(
		[]
	);
useEffect(()=>
{
	const getCat = async () => {
		setCategoryDropdownList(await ProductService.getCategories());
		setStatusDropdownList(await ProductService.getStatuses());
	};
	getCat();
},[])
	useEffect(() => {
		onChange(myObject);
	
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
						{prop.type === "dropdown" ? (
							<Dropdown
								list={
									prop.name === "productCategoryId"
										? categoryDropdownList
										: statusDropdownList
								}
								getValue={(e: string) => updateObjectProperty(prop.name, e)}
							/>
						) : (
							<Input
								key={key}
								name={prop.name}
								disabled={isEnabled ?? true}
								placeholder={`${
									isEnabled || type === "create" ? displayInput(prop.name) : ""
								}`}
								color="text-slate-800"
								getValue={(e: string) => {
									updateObjectProperty(prop.name, e);
								}}
							>
								{type !== "create" && !isEnabled ? displayInput(prop.name) : ``}
							</Input>
						)}
					</Container>
				))}
			</Container>
		</form>
	);
}

export default Form;
