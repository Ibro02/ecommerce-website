import api from "../https";
export interface IProduct {
	name: string;
	description: string;
	price: number;
	unitsInStocks: number;
	productImageId: number | null;
	productCategoryId: number;
	statusId: number;
}
const ProductService = {
	addImage: async (img: any) => {
		const { data } = await api.post("/ProductImage/AddNewProductImage", img);
		console.log(data);
		return data;
	},
	addNewProduct: async (product: IProduct) => {
		const url = "/Products/Post";
		try {
			const { data } = await api.post(url, product);
			alert("You added new product!");
			return data;
		} catch (error) {
			alert(error);
		}
	},
	getCategories: async () => {
		const { data } = await api.get("/ProductCategory/GetAll");
		return data;
	},
	getStatuses: async () => {
		const { data } = await api.get("/Statuses/GetAll");
		return data;
	},
};

export default ProductService;
