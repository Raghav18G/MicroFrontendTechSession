import axios from "axios";
import { BASE_URL } from "./constatnts";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 403) {
//       cookies.remove("t_id");
//       window.location = "/login";
//     } else return Promise.reject(error);
//   }
// );

export default axiosInstance;
