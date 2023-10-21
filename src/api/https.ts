import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8000/api/",
	withCredentials: true,
});

// Request interceptor for API calls
instance.interceptors.request.use(
	(config:any) => {
		config.headers = {
			"Authorization": `Bearer ${localStorage.token}`,
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);
export const headers = {
	Authorization: `Bearer ${localStorage.token}`,
  };
export default instance;