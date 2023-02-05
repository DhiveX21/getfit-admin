import axios from "axios";
import { createMock } from "helpers/ResponseMockTemplate";
import mockMedicalRecord from "_mock/medicalRecordApi_mock";

let MEDICAL_RECORD_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;

// env is null url can be redirect to url mock
if (MEDICAL_RECORD_URL === undefined) {
  const mock = createMock();
  mockMedicalRecord(mock);
  MEDICAL_RECORD_URL = "api";
}

export const medicalRecordAPI = {
  getAllByIdUser: (idUser) => {
    return axios.get(`${MEDICAL_RECORD_URL}/records/user/${idUser}`);
  },
  
  getDatatable: (params) => {
    return axios.post(`${MEDICAL_RECORD_URL}/records/datatable`, { ...params });
  },

  getOneById: (id) => {
    return axios.get(`${MEDICAL_RECORD_URL}/records/${id}`);
  },
  
  update: (id, body) => {
    return axios.put(`${MEDICAL_RECORD_URL}/records/${id}`, { ...body });
  },

  create: (params) => {
    return axios.post(`${MEDICAL_RECORD_URL}/records`, { ...params });
  }, 

  delete: (id) => {
    return axios.delete(`${MEDICAL_RECORD_URL}/records/${id}`);
  }
};

