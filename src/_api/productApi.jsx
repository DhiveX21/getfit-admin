import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockProduct from "_mock/productApi_mock";

let PRODUCT_URL = process.env.REACT_APP_PRODUCT_SERVICE_URL;

// env is null url can be redirect to url mock
if (PRODUCT_URL === undefined) {
  const mock = createMock();
  mockProduct(mock);
  PRODUCT_URL = "api";
}

export const productAPI = {
  getDatatable: (params) =>  {
    return axios.post(`${PRODUCT_URL}/products/datatable`, { ...params });
  },

  getAllMaster: () =>  {
    return axios.get(`${PRODUCT_URL}/base-products`);
  },

  getAllFacility: () =>  {
    return axios.get(`${PRODUCT_URL}/facilities`);
  },

  createFacility: (body) =>  {
    return axios.post(`${PRODUCT_URL}/facilities`, { ...body });
  },

  createMaster: (body) =>  {
    return axios.post(`${PRODUCT_URL}/base-products`, { ...body });
  },

  create: (body) =>  {
    return axios.post(`${PRODUCT_URL}/products`, { ...body });
  },

  update: (id, body) =>  {
    return axios.put(`${PRODUCT_URL}/products/${id}`, { ...body });
  },

  getOneById: (productId) =>  {
    return axios.get(`${PRODUCT_URL}/products/${productId}`);
  },
  
  deleteOne: (productId) =>  {
    return axios.delete(`${PRODUCT_URL}/products/${productId}`);
  }
}
