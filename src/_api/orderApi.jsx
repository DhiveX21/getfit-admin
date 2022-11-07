import axios from "axios";

const ORDER_URL = process.env.REACT_APP_ORDER_SERVICE_URL;

export function getAllOrderDatatable(params) {
  return axios.post(`${ORDER_URL}/orders/datatable`, { ...params });
}

export function getOneOrder(orderId) {
  return axios.get(`${ORDER_URL}/orders/${orderId}`);
}

export function cancelOrder(orderId) {
  return axios.put(`${ORDER_URL}/orders/cancel/${orderId}`);
}

export function completeOrder(orderId) {
  return axios.put(`${ORDER_URL}/orders/complete/${orderId}`);
}