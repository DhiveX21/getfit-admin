import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockPatient from "_mock/patientApi_mock";

let PATIENT_URL = process.env.REACT_APP_USER_SERVICE_URL

// env is null url can be redirect to url mock
if (PATIENT_URL === undefined) {
  const mock = createMock();
  mockPatient(mock);
  PATIENT_URL = "api";
}


export const patientAPI = {
  getDatatable: (params) => {
    return axios.post(`${PATIENT_URL}/patients/datatable`, { ...params });
  },
  
  getOneById: (id) => {
    return axios.get(`${PATIENT_URL}/patients/${id}`);
  },
  
  getAll: () => {
    return axios.get(`${PATIENT_URL}/patients`);
  },
  
  deleteOne: (id) => {
    return axios.delete(`${PATIENT_URL}/patients/${id}`);
  },
  
  createUser: (body) => {
    return axios.post(`${PATIENT_URL}/users`, { ...body });
  },
  
  create: (body) => {
    return axios.post(`${PATIENT_URL}/patients`, { ...body });
  },
  
  update: (id, body) => {
    return axios.put(`${PATIENT_URL}/patients/${id}`, { ...body });
  }
}
