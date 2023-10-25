import axios from "axios";

const port = "44369";
let api = axios.create({
	baseURL: `https://localhost:${port}/api/`,
	timeout: 1000,
	headers: { Authorization: `Bearer ${localStorage.token}` }
  });

// Request interceptor for API calls
api.interceptors.request.use(
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

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			// The server responded with a non-2xx status code
			const status = error.response.data.status;
			if (status === 404) {

				window.alert(`${error?.response?.data.title}, try again!`); //todo - with backend make this line functional for the project and delete other toastmessages
			}
			return Promise.reject(error); // Reject the Promise with the error
		} else if (error.request) {
			// The request was made but no response was received
			// For example, if the server is not reachable
			return Promise.reject(error);
		} else {
			// Something happened while setting up the request
			return Promise.reject(error);
		}
	}
);


export const headers = {
	Authorization: `Bearer ${localStorage.token}`,
  };
export default api;