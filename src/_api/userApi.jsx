import axios from "axios";

const USER_URL = process.env.REACT_APP_USER_SERVICE_URL;

export function getAllUser() {
  return axios.get(`${USER_URL}/users`);
}

export function login(params) {
  return axios.post(`${USER_URL}/users/login-admin`, { ...params });
}
