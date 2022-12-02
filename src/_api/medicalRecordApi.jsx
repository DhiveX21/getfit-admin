import axios from "axios";

const MEDICAL_RECORD_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;

export function getAllMedicalRecordsDatatable(params) {
  return axios.post(`${MEDICAL_RECORD_URL}/records/datatable`, { ...params });
}
export function getOneMedicalRecord(medicalRecordId) {
  return axios.get(`${MEDICAL_RECORD_URL}/records/${medicalRecordId}`);
}
export function getAllMedicalRecordByIdUser(idUser) {
  return axios.get(`${MEDICAL_RECORD_URL}/records/user/${idUser}`);
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
