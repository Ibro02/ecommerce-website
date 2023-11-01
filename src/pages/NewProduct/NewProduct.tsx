import ProductService from "../../api/services/Products";
import ImageInput from "../../components/common/ImageInput/ImageInput";
import Title from "../../components/common/Title/Title";
function NewProduct() {
	
	return (
		<div className="bg-white w-full h-full">
			<Title>Sell your product</Title>
		<ImageInput/>
		</div>
	);
}

export default NewProduct;
