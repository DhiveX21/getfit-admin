import axios from "axios";

const MEDICAL_RECORD_URL = process.env.REACT_APP_APPOINTMENT_SERVICE_URL;

export function getAllMedicalRecordsDatatable(params) {
  return axios.post(`${MEDICAL_RECORD_URL}/records/datatable`, { ...params });
}
