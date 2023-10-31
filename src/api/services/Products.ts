
import api from "../https";
const ProductService = {
	addImage:async (img:any) => {
      const {data} = await  api.post("/ProductImage/AddNewProductImage", img);
      console.log(data);
      return data;
    }
};

export default ProductService;
