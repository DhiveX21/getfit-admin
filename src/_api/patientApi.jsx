import axios from "axios";

const PATIENT_URL = process.env.REACT_APP_USER_SERVICE_URL;

export function getAllPatientDatatable(params) {
  return axios.post(`${PATIENT_URL}/patients/datatable`, { ...params });
}

export function getOnePatient(patientId) {
  return axios.get(`${PATIENT_URL}/patients/${patientId}`);
}

export function getAllPatient() {
  return axios.get(`${PATIENT_URL}/patients`);
}

export function deletePatient(patientId) {
  return axios.delete(`${PATIENT_URL}/patients/${patientId}`);
}

export function createUser(body) {
  return axios.post(`${PATIENT_URL}/users`, { ...body });
}

export function createPatient(body) {
  return axios.post(`${PATIENT_URL}/patients`, { ...body });
}

export function updatePatient(patientId, body) {
  return axios.put(`${PATIENT_URL}/patients/${patientId}`, { ...body });
}
