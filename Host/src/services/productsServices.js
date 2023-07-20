import axiosInstance from "../../axios";

export const getProductsService = async (payload) => {
  try {
    const response = await axiosInstance.get(`/products`, payload);
    console.log("Response in Service", response);
    return response;
  } catch (e) {
    return { error: e.response.data.message };
  }
};

export const deleteProductsService = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    console.log("Response in Delete Service", response);
    return { response: response };
  } catch (e) {
    return { error: e.response.data };
  }
};
