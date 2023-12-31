import ProductService, { IProduct } from "../../api/services/Products";
import { useEffect, useState } from "react";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import Title from "../../components/common/Title/Title";
import Form from "../../components/groups/Form/Form";
import { ProductProps } from "../../constants/Mock";
import Container from "../../utils/containers/Container/Container";
import {  useAppSelector } from "../../redux/store";


function NewProduct() {
	const images = useAppSelector(state=>state.imageReduces.imageUrl);
	useEffect(()=>
	{
	//console.log(myObject)

	})
	 
	const validateProductInput = ()=>
	{
		if (myObject)
		if (myObject.name.length > 5)
		if (myObject.price >= 1)
		if (myObject.productCategoryId !== undefined&&myObject.productCategoryId!==null)
		if (myObject.statusId !== undefined && myObject.statusId!== null)
		{
 ProductService.addNewProduct(myObject,images);
		}
	}
	const product = useAppSelector(product=>product.productSlice)
	const [myObject, setMyObject] = useState<IProduct>();
	return (
		<Container className="flex flex-col mt-20 justify-between p-10 rounded-md bg-white ">
			<Title>Sell your product</Title>
			<Container className="flex gap-24">
				<Container className="m-auto w-full">
					<Form
						objectProps={ProductProps}
						object={product}
						onChange={(e: IProduct | undefined) => setMyObject(e)}
						type="create"
						isEnabled={false}
					/>
				</Container>
				<ImageInput />
			</Container>
				<button className={"button-24 m-auto"} onClick={()=>{validateProductInput()}}>Sell!</button>
		</Container>
	);
}

export default NewProduct;
