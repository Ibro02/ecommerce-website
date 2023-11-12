import api from "../https";
export interface IProduct {
	name: string;
	description: string;
	price: number;
	unitsInStocks: number;
	productImageId: number | null;
	productCategoryId: number;
	statusId: number;
	images: string[] | IImages[];
}

export interface IWrappedProducts {
	product: IProduct;
	images: IImages[];
}
export interface IImages {
	imageUrl: string;
}
export interface IImageGallery {
	image: string;
	productId: number;
}
const ProductService = {
	addImage: async (img: IImageGallery[]) => {
		const { data } = await api.post("/Image", img);
		console.log(data);
		return data;
	},

	addNewProduct: async (product: IProduct, imageList: string[]) => {
		const url = "/Products/Post";

		const newProduct: IProduct = {
			name: product.name,
			description: product.description,
			productCategoryId: product.productCategoryId,
			price: product.price,
			unitsInStocks: product.unitsInStocks,
			productImageId: null,
			statusId: product.statusId,
			images: imageList,
		};
		try {
			const { data } = await api.post(url, newProduct);
			alert("You posted new product successifully!");
			return data;
		} catch (error) {
			alert(error);
		}
	},
	getProducts: async () => {
		const url = "/Products/GetAll";
		const { data } = await api.get(url);
		return data;
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
