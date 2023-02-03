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
  getAllMedicalRecordByIdUser: (idUser) => {
    return axios.get(`${MEDICAL_RECORD_URL}/records/user/${idUser}`);
  },
};

export function getAllMedicalRecordsDatatable(params) {
  return axios.post(`${MEDICAL_RECORD_URL}/records/datatable`, { ...params });
}
export function getOneMedicalRecord(medicalRecordId) {
  return axios.get(`${MEDICAL_RECORD_URL}/records/${medicalRecordId}`);
}

export function updateMedicalRecord(medicalRecordId, body) {
  return axios.put(`${MEDICAL_RECORD_URL}/records/${medicalRecordId}`, { ...body });
}
export function createMedicalRecord(params) {
  return axios.post(`${MEDICAL_RECORD_URL}/records`, { ...params });
}
export function deleteMedicalRecord(medicalRecordId) {
  return axios.delete(`${MEDICAL_RECORD_URL}/records/${medicalRecordId}`);
}
