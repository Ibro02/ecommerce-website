import ProductService from "../../api/services/Products";
import { useState } from "react";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import Title from "../../components/common/Title/Title";
import Form from "../../components/groups/Form/Form";
import { ProductProps } from "../../constants/Mock";
import Container from "../../utils/containers/Container/Container";
import Flex from "../../utils/containers/Flex/Flex";
import Box from "../../components/groups/Box/Box";
function NewProduct() {
	const [myObject, setMyObject] = useState<any>({});
	return (

			<Container className="flex flex-col justify-between p-10 rounded-md bg-white ">

			<Title>Sell your product</Title>

			<Container className="m-auto w-full">
			<Form objectProps={ProductProps} object={{}} onChange={(e:string)=>setMyObject(e)} type="create" isEnabled={false}/>
			</Container>
			<ImageInput/>

	
			</Container>
	
	);
}

export default NewProduct;
