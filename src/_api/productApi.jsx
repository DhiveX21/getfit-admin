import axios from "axios";

const PRODUCT_URL = process.env.REACT_APP_PRODUCT_SERVICE_URL;

export function getAllProductDatatable(params) {
  return axios.post(`${PRODUCT_URL}/products/datatable`, { ...params });
}
export function getAllMasterProduct() {
  return axios.get(`${PRODUCT_URL}/base-products`);
}
export function getAllFacilityProduct() {
  return axios.get(`${PRODUCT_URL}/facilities`);
}
export function createFacilityProduct(body) {
  return axios.post(`${PRODUCT_URL}/facilities`, { ...body });
}
export function createMasterProduct(body) {
  return axios.post(`${PRODUCT_URL}/base-products`, { ...body });
}
export function createProduct(body) {
  return axios.post(`${PRODUCT_URL}/products`, { ...body });
}
export function updateProduct(id, body) {
  return axios.put(`${PRODUCT_URL}/products/${id}`, { ...body });
}
export function getOneProduct(productId) {
  return axios.get(`${PRODUCT_URL}/products/${productId}`);
}
export function deleteProduct(productId) {
  return axios.delete(`${PRODUCT_URL}/products/${productId}`);
}
