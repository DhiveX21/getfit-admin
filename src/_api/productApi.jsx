import { configAPIFacade } from "helpers/UtilHelpers";
import mockProduct from "_mock/productApi_mock";

const [ axiosInstance, PRODUCT_URL ] = configAPIFacade(process.env.REACT_APP_PRODUCT_SERVICE_URL, mockProduct);

export const productAPI = {
  getDatatable: (params) =>  {
    return axiosInstance.post(`${PRODUCT_URL}/products/datatable`, { ...params });
  },

  getAllMaster: () =>  {
    return axiosInstance.get(`${PRODUCT_URL}/base-products`);
  },

  getAllFacility: () =>  {
    return axiosInstance.get(`${PRODUCT_URL}/facilities`);
  },

  createFacility: (body) =>  {
    return axiosInstance.post(`${PRODUCT_URL}/facilities`, { ...body });
  },

  createMaster: (body) =>  {
    return axiosInstance.post(`${PRODUCT_URL}/base-products`, { ...body });
  },

  create: (body) =>  {
    return axiosInstance.post(`${PRODUCT_URL}/products`, { ...body });
  },

  update: (id, body) =>  {
    return axiosInstance.put(`${PRODUCT_URL}/products/${id}`, { ...body });
  },

  getOneById: (productId) =>  {
    return axiosInstance.get(`${PRODUCT_URL}/products/${productId}`);
  },
  
  deleteOne: (productId) =>  {
    return axiosInstance.delete(`${PRODUCT_URL}/products/${productId}`);
  }
}
