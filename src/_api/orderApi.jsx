import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockOrder from "_mock/orderApi_mock";

let ORDER_URL = process.env.REACT_APP_ORDER_SERVICE_URL;

// env is null url can be redirect to url mock
if (ORDER_URL === undefined) {
  const mock = createMock();
  mockOrder(mock);
  ORDER_URL = "api";
}

export const orderAPI = {
  getDatatable: (params) => {
    return axios.post(`${ORDER_URL}/orders/datatable`, { ...params });
  },

  getOneById: (orderId) => {
    return axios.get(`${ORDER_URL}/orders/${orderId}`);
  },

  cancel: (orderId) => {
    return axios.put(`${ORDER_URL}/orders/cancel/${orderId}`);
  },

  complete: (orderId) => {
    return axios.put(`${ORDER_URL}/orders/complete/${orderId}`);
  },
};
