import ProductService, {
	IWrappedProducts,
} from "../../api/services/Products";
import Container from "../../utils/containers/Container/Container";
import Box from "../../components/groups/Box/Box";
import { useEffect, useState } from "react";
import Image from "../../components/common/Image/Image";
function ProductCatalog() {
	const [productList, setProductList] = useState<IWrappedProducts[]>([]);
	const [statusList, setStatusList] = useState<{id:number, name:string}[]>([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const products = await ProductService.getProducts();
				const statuses = await ProductService.getStatuses();
				setStatusList(statuses);
				setProductList(products);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		getProducts();
	}, []);

	return (
		<Container className="flex flex-wrap flex-col md:flex-row lg:gap-x-0.5 justify-between w-full m-auto">
			{productList?.map((prop, key) => {
				var product = prop?.product;
				var images = prop?.images;
				return (
					<Container className="flex-wrap w-auto md:w-1/6">
					<Box rounded={false} key={key}>
						<Container className="flex flex-col-reverse w-full h-full">
							<h3>{statusList[product?.statusId].name}</h3>
							<h3>{product?.price} KM</h3>
							<Image src={images[0].imageUrl} />
							<h2 className="font-bold text-lg">{product?.name}</h2> 
						</Container>
					</Box>
					</Container>
				);
			})}
		</Container>
	);
}

export default ProductCatalog;
