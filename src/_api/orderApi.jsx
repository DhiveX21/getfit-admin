import { configAPIFacade } from "helpers/UtilHelpers";
import mockOrder from "_mock/orderApi_mock";

const [ axiosInstance, ORDER_URL ] = configAPIFacade(process.env.REACT_APP_ORDER_SERVICE_URL, mockOrder);

export const orderAPI = {
  getDatatable: (params) => {
    return axiosInstance.post(`${ORDER_URL}/orders/datatable`, { ...params });
  },

  getOneById: (orderId) => {
    return axiosInstance.get(`${ORDER_URL}/orders/${orderId}`);
  },

  cancel: (orderId) => {
    return axiosInstance.put(`${ORDER_URL}/orders/cancel/${orderId}`);
  },

  complete: (orderId) => {
    return axiosInstance.put(`${ORDER_URL}/orders/complete/${orderId}`);
  },
};
