import ProductService from "../../api/services/Products";
function NewProduct() {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const target = e.target as EventTarget & HTMLInputElement;
		const file = new FileReader();
		console.log(target?.files && target?.files[0]);
		file.onloadend = () => {
			ProductService.addImage({ id: 0, image: `${file.result}`, productId: 1 });
			console.log(file.result);
		};
		try {
			if (target?.files && target.files[0].size < 1000000)
				file.readAsDataURL(target?.files[0]);
			else throw Error("Maximum size of file is 1MB!");
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div>
			<input
				type="file"
				onChange={(e) => {
					handleChange(e);
				}}
			/>
		</div>
	);
}

export default NewProduct;
